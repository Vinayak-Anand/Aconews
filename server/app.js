const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const newsRoutes = require('./routes/news');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('MongoDB connected successfully');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
  process.exit(-1);
});

app.use('/api/news', newsRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Aconews API.');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
