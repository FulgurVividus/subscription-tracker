import express from "express";
import { PORT } from "./config/env.js";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import cookieParser from "cookie-parser";

// initializing the app
const app = express();

// express built-in middlewares
app.use(express.json()); // it allows to handle json data sent in requests or API calls
app.use(express.urlencoded({ extended: false })); // helps to process the form data sent via HTML forms in a simple format
app.use(cookieParser()); // reads cookies from incoming requests so the app could store use data

// routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);

// custom global middleware
app.use(errorMiddleware);

// creating first route
app.get("/", (req, res) => {
  res.send(`Welcome to Subscription Tracker API`);
});

// to make the server listen for requests trying to access specific routes
app.listen(PORT, async () => {
  console.log(
    `Subscription Tracker API is running on http://localhost:${PORT}`
  );

  await connectToDatabase();
});

export default app;
