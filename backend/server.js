import express from 'express';
import dotenv from 'dotenv';
import authRoute from './routes/authRoute.js';
import memeRoute from './routes/memeRoute.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Serve static files (images in my case)
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use('/auth', authRoute);
app.use('/memes', memeRoute);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});