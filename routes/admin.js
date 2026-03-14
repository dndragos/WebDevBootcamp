const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn, isAdmin, isSuperAdmin } = require('../Middleware.js');
const admin = require('../controllers/admin');

router.get('/users', isLoggedIn, isAdmin, catchAsync(admin.renderUsers));
router.post('/users/:userId/toggle-admin', isLoggedIn, isSuperAdmin, catchAsync(admin.toggleAdmin));
router.delete('/users/:userId', isLoggedIn, isAdmin, catchAsync(admin.deleteUser));

module.exports = router;