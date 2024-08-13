import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from "cors"
import hotelRoutes from './api/routers/hotels.js';
import authRoutes from './api/routers/auth.js';
import roomsRoutes from './api/routers/rooms.js';
import usersRoutes from './api/routers/users.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/hotels', hotelRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/rooms', roomsRoutes);
app.use('/api/users', usersRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO, {

    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1); 
  }
};

connect().then(() => {
  app.listen(8000, () => {
    console.log('Connected to backend');
  });
});
