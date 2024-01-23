const express = require('express');
const router = express.Router();
const User = require('../model/User.model');

// GET method to retrieve all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST method to create a new user
router.post('/', async (req, res) => {
    console.log("testing the api....");
    const user = new User({
        role: req.body.role,
        email: req.body.email,
        name:req.body.name,
        password: req.body.password ,
        location: req.body.location
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
