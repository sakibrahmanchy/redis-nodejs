// Define routes
const express = require('express');
const router = express.Router();

// Home Route
router.get('/', (req, res) => {
    res.render('pages/home');
});

// Other routes
module.exports = router;