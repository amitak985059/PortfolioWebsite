// backend/routes/contact.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Handle contact form submission
router.post('/', async (req, res) => {
    const { name, email, phone, message } = req.body;

    const contact = new Contact({ name, email, phone, message });

    try {
        await contact.save();
        res.status(200).json({ message: 'Contact form submitted successfully' });
    } catch (error) {
        console.error('Error saving contact form data:', error);
        res.status(500).json({ message: 'There was an error submitting the form. Please try again.' });
    }
});

module.exports = router;
