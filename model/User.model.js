const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    role: { type: String ,required:true},
    email: { type: String, unique: true},
    name:{type: String, required:true},
    password: { type: String },
    location: {type:String, required:true}
},
{ timestamps: true });

module.exports = mongoose.model('User', userSchema);
