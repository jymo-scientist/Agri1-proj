const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('t'));
// router.get('/login', forwardAuthenticated, (req, res) => res.render('login'));
// router.get('/register', forwardAuthenticated, (req, res) => res.render('register'));

// Dashboard
router.get('/farmers', ensureAuthenticated, (req, res) =>
  res.render('farmers', {
    user: req.user
  })
);

module.exports = router;