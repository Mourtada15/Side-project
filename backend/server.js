import express from 'express';
import dotenv from 'dotenv';
import authRoute from './routes/authRoute.js';
import memeRoute from './routes/memeRoute.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { requireAuth } from './middlewares/authMiddleware.js';

dotenv.config();

const app = express();

app.use(cors());
// app.use(
//   cors({
//     origin: 'http://localhost:3000', // React app's URL
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true, // Allow cookies or HTTP authentication
//   })
// );

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/assets", express.static('assets'));

app.use('/auth', authRoute);
app.use('/memes', requireAuth, memeRoute);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});