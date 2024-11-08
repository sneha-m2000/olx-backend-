const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected')
        console.log("MongoDB URI:", process.env.MONGO_URI);
        ;

    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        console.log("MongoDB URI:", process.env.MONGO_URI);

        process.exit(1);
    }
};


module.exports = connectDB;
