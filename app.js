import express from "express";
import { PORT } from "./config/env.js";

// initializing the app
const app = express();

// creating first route
app.get("/", (req, res) => {
  res.send(`Welcome to Subscription Tracker API`);
});

// to make the server listen for requests trying to access specific routes
app.listen(PORT, () => {
  console.log(
    `Subscription Tracker API is running on http://localhost:${PORT}`
  );
});

export default app;
