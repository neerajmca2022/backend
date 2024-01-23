const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import database configuration
require('./config/db.config.js');

const app = express();
const corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/// set all controllers here
app.use('/user',require('./controller/user.controller.js'));
app.use('/departments',require('./controller/department.controller.js'));
// Set Port where Server runs

// Set the port where the server runs
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`NodeJS server is running on port ${PORT}`);
});
