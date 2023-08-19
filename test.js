const mongoose = require('mongoose');

require('dotenv').config();

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to the database'))
.catch((err) => console.error('Error connecting to the database:', err));
