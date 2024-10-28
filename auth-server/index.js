import 'dotenv/config';
import express from 'express';
import cookieParser from 'cookie-parser';
import { Auth } from '@auth/core';
import GoogleProvider from '@auth/core/providers/google';

const app = express();
const PORT = 4000;

console.log("AUTH_BASE_URL:", process.env.AUTH_BASE_URL);
console.log("GOOGLE_CLIENT_ID:", process.env.GOOGLE_CLIENT_ID);
console.log("GOOGLE_CLIENT_SECRET:", process.env.GOOGLE_CLIENT_SECRET);
console.log("NEXTAUTH_SECRET:", process.env.NEXTAUTH_SECRET);

const authHandler = async (req, res) => {
  try {
    // Log the actual URL and data being passed
    console.log("Using baseUrl for Auth:", process.env.AUTH_BASE_URL);

    const response = await Auth(req, {
      providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
      ],
      secret: process.env.NEXTAUTH_SECRET,
      baseUrl: process.env.AUTH_BASE_URL, // Ensure this is http://localhost:4000
    });

    response.headers.forEach((value, key) => res.setHeader(key, value));
    res.status(response.status).send(await response.text());
  } catch (error) {
    console.error("Error in auth handler:", error);
    res.status(500).send("Internal Server Error");
  }
};

// Middleware
app.use(cookieParser());
app.use('/auth', authHandler);

app.listen(PORT, () => {
  console.log(`Auth server running on ${process.env.AUTH_BASE_URL || `http://localhost:${PORT}`}`);
});