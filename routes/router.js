// Define routes
const express = require('express');
const router = express.Router();

// Home Route
router.get('/', (req, res) => {
    res.render('pages/home');
});

router.get('/register', (req, res) => {
    // res.send('her');
    res.render('pages/register');
});

router.get('/login', (req, res) => {
    res.render('pages/login');
});

// Other routes
module.exports = router;