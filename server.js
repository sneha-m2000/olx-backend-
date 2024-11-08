const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./config/db');
const authRoutes = require('./routes/authroutes');
require('dotenv').config();

// Middleware to parse JSON requests
app.use(express.json());

// Enable CORS for all origins (you can restrict this to specific origins if needed)
app.use(cors());

connectDB();

// Use auth routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});