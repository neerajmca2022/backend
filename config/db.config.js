const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://neeraj_2024:A1jlft3b@test1.jtabjw3.mongodb.net/test1?retryWrites=true&w=majority', {}).then(() => {
    mongoose.set('debug', true);
    console.log('MongoDB connection is successful');
}, err => {
    console.error('Error in connecting to MongoDB:', err);
});
