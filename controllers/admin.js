const User = require('../models/user');
const Campground = require('../models/campground');
const Review = require('../models/review');
const { cloudinary } = require('../cloudinary');

module.exports.renderUsers = async (req, res) => {
    const users = await User.find({});
    res.render('admin/users', { users });
}

module.exports.toggleAdmin = async (req, res) => {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (user._id.equals(req.user._id)) {
        req.flash('error', 'You cannot change your own admin status!');
        return res.redirect('/admin/users');
    }
    if ((user.isAdmin || user.isSuperAdmin) && !req.user.isSuperAdmin) {
        req.flash('error', 'Only a superadmin can change the status of another admin!');
        return res.redirect('/admin/users');
    }
    user.isAdmin = !user.isAdmin;
    await user.save();
    req.flash('success', `${user.username} is ${user.isAdmin ? 'now an admin' : 'no longer an admin'}.`);
    res.redirect('/admin/users');
}

module.exports.deleteUser = async (req, res) => {
    const { userId } = req.params;
    const user = await User.findById(userId);

    if (!user) {
        req.flash('error', 'User not found!');
        return res.redirect('/admin/users');
    }
    if (user._id.equals(req.user._id)) {
        req.flash('error', 'You cannot delete your own account!');
        return res.redirect('/admin/users');
    }

    if ((user.isAdmin || user.isSuperAdmin) && !req.user.isSuperAdmin) {
        req.flash('error', 'Only a superadmin can delete another admin!');
        return res.redirect('/admin/users');
    }
    const campgrounds = await Campground.find({ author: userId });
    for (let campground of campgrounds) {
        for (let img of campground.images) {
            await cloudinary.uploader.destroy(img.filename);
        }
        await Campground.findByIdAndDelete(campground._id);
    }

    const userReviews = await Review.find({ author: userId });
    for (let review of userReviews) {
        await Campground.updateOne(
            { reviews: review._id },
            { $pull: { reviews: review._id } }
        );
        await Review.findByIdAndDelete(review._id);
    }

    await User.findByIdAndDelete(userId);
    req.flash('success', `User "${user.username}" and all their data have been deleted.`);
    res.redirect('/admin/users');
}