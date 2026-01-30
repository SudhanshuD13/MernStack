const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection (Hum Docker service ka naam use karenge)
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/tasks';
mongoose.connect(mongoURI)
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

// Simple Route
app.get('/api/health', (req, res) => {
  res.send({ status: "Backend is running!", time: new Date() });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
