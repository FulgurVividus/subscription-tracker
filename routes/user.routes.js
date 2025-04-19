import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const userRouter = Router();

// Path: /api/v1/users/ (GET)
userRouter.get("/", getUsers);

// Path: /api/v1/users/:id (GET)
userRouter.get("/:id", authorize, getUser);

// Path: /api/v1/users/ (POST)
userRouter.post("/", (req, res) => res.send({ title: "CREATE new user" }));

// Path: /api/v1/users/:id (PUT)
userRouter.put("/:id", (req, res) => res.send({ title: "UPDATE user" }));

// Path: /api/v1/users/:id (DELETE)
userRouter.delete("/:id", (req, res) => res.send({ title: "DELETE user" }));

export default userRouter;
