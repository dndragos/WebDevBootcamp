const express = require('express');
const router = express.Router();

const Campground = require('../models/campground');

const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');
const { isAuthorOrAdmin, isLoggedIn, validateCampground } = require('../Middleware.js');

const campgrounds = require('../controllers/campgrounds');

const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

router.route('/')
    .get(catchAsync(campgrounds.index))
    .post(isLoggedIn, upload.array('image'), validateCampground, catchAsync(campgrounds.createCampground));

router.get('/new', isLoggedIn, campgrounds.renderNewForm);

router.route('/:id')
    .get(catchAsync(campgrounds.showCampground))
    .put(isLoggedIn, isAuthorOrAdmin, upload.array('image'), validateCampground, catchAsync(campgrounds.updateCampground))
    .delete(isLoggedIn, isAuthorOrAdmin, catchAsync(campgrounds.deleteCampground));

router.get('/:id/edit', isLoggedIn, isAuthorOrAdmin, catchAsync(campgrounds.renderEditForm));

module.exports = router;