import './config/instrument.js';
import express from 'express';
import cors from 'cors';
import 'dotenv/config'; // loads .env file into process.env
import connectDB from './config/db.js';
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from './controllers/webhooks.js';


const app = express(); 

//connect to database

await connectDB();

// Middleware
app.use(cors()); // enable Cross-Origin Resource Sharing
app.use(express.json()); // parse incoming JSON requests

// Routes
app.get('/', (req, res) => {
  res.send("API working.......Minster");
});
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

app.post('/webhooks',clerkWebhooks)
// Fallback route (optional for debugging)
app.use((req, res) => {
  res.status(404).send('Route not found');
});

// Start server
const PORT = process.env.PORT || 5000;
Sentry.setupExpressErrorHandler(app);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
