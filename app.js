import express from "express";

// initializing the app
const app = express();

// creating first route
app.get("/", (req, res) => {
  res.send(`Welcome to Subscription Tracker API`);
});

// to make the server listen for requests trying to access specific routes
app.listen(3000, () => {
  console.log(`Subscription Tracker API is running on http://localhost:3000`);
});

export default app;
