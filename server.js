const express = require('express');
const mongoose = require('mongoose');
const mahasiswaRouter = require('../ExpressJS/routers/mahasiswarouters');
const userRouter = require('../ExpressJS/routers/users');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: process.env.MONGODB_DB
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Routes
app.use('/api', mahasiswaRouter);
app.use('/api', userRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
