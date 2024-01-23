const mongoose = require('mongoose');

const Dept = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    department: { type: String, enum: ['Doctor', 'Engineer', 'Staff'], required: true }
});

module.exports = mongoose.model('Department', Dept);
