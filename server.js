import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import pokemon from './router/pokemon.js';
import 'dotenv/config';

const app = express();

// Defining pokemon routes
app.use('/api', pokemon)

// Serving static file
app.use('/public', express.static('public'));

// Code for pointing backend to build folder to serve node on single port not required for local dev
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fullPath = path.join(__dirname, "frontend/build");
app.use(express.static(path.join(fullPath)))

// Support cors
app.use(cors({
    origin: 'http://localhost:3000',
}));

// App initialization
app.listen(process.env.SERVER_PORT, (err, data) => {
    console.log('Server started on: ', process.env.SERVER_PORT);
});
