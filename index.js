import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import hotelRoutes from './api/routers/hotels.js';
import authRoutes from './api/routers/auth.js';
import roomsRoutes from './api/routers/rooms.js';
import usersRoutes from './api/routers/users.js';
import cookieParser from 'cookie-parser';
dotenv.config();
const app = express();

app.use(express.json());

app.use(cookieParser())
// Routes
app.use('/api/hotels', hotelRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/rooms',roomsRoutes);
app.use('/api/users', usersRoutes);

app.use((err,req,res,next)=>{
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something Wrong";
  return res.status(errorStatus).json({
    success : false,
    status : errorStatus,
    message : errorMessage,
    stack : err.stack,
  })

})

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('Connected to MongoDB');
  } catch (error) {
    
  }
};
await connect();

app.listen(8000, async () => {
  console.log('Connected to backend');
});
