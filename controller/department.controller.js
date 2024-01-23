const express = require('express');
const router = express.Router();
const Department = require('../model/department.model');

// GET method API
router.get('/', async (req, res) => {
    try {
        const departments = await Department.find().sort().lean();
        res.status(200).json(departments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST method API
router.post('/', async (req, res) => {
    const { userId, department } = req.body;

    try {
        const newDepartment = await Department.create({ userId, department });
        res.status(201).json(newDepartment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
