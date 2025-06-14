import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import destinationRoute from './routes/destination.js';
import packagerouter from  './routes/package.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log(' MongoDB connected');
})
.catch((err) => {
  console.error(' MongoDB connection failed:', err.message);
});

app.use('/api/destinations' , destinationRoute); //route to fetch destinations
app.use("/api/packages" , packagerouter); //route to fetch packages
// Server Start
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
