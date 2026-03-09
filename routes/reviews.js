const express = require('express');
const router = express.Router({ mergeParams: true });

const Campground = require('../models/campground');
const Review = require('../models/review');

const ExpressError = require('../utils/ExpressError');
const catchAsync = require('../utils/catchAsync');
const { validateReview, isLoggedIn, isReviewAuthorOrAdmin } = require('../Middleware.js');

const reviews = require('../controllers/reviews');

router.post('/', isLoggedIn, validateReview, catchAsync(reviews.createReview));

router.delete('/:reviewId', isLoggedIn, isReviewAuthorOrAdmin, catchAsync(reviews.deleteReview));

module.exports = router;