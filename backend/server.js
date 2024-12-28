import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloundinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';

// App Config
const app = express();
const port = process.env.PORT || 3535;
connectDB();
connectCloundinary();

// Middleware
app.use(cors());
app.use(express.json());  // To parse JSON request bodies

// API Endpoint
app.use('/api/user',userRouter)

app.get('/', (req, res) => {
    res.send('API Working');
});

// Start Server
app.listen(port, () => {
    console.log(`Server is started on PORT: ${port}`);
});
