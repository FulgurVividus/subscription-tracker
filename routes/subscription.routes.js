import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import {
  createSubscription,
  getUserSubscriptions,
} from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

// Path: /api/v1/subscriptions (GET)
subscriptionRouter.get("/", (req, res) =>
  res.send({ title: "GET all subscriptions" })
);

// Path: /api/v1/subscriptions/:id (GET)
subscriptionRouter.get("/:id", (req, res) =>
  res.send({ title: "GET subscription details" })
);

// Path: /api/v1/subscriptions (POST)
subscriptionRouter.post("/", authorize, createSubscription);

// Path: /api/v1/subscriptions/:id (PUT)
subscriptionRouter.put("/:id", (req, res) =>
  res.send({ title: "UPDATE subscription" })
);

// Path: /api/v1/subscriptions/:id (DELETE)
subscriptionRouter.delete("/:id", (req, res) =>
  res.send({ title: "DELETE subscription" })
);

// Path: /api/v1/subscriptions/user/:id (GET)
subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions);

// Path: /api/v1/subscriptions/:id/cancel (PUT)
subscriptionRouter.put("/:id/cancel", (req, res) =>
  res.send({ title: "CANCEL subscription" })
);

// Path: /api/v1/subscriptions/upcoming-renewals (GET)
subscriptionRouter.get("/upcoming-renewals", (req, res) =>
  res.send({ title: "GET upcoming renewals" })
);

export default subscriptionRouter;
