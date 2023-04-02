//http://localhost:5000/api/v1/auth
const express = require("express");
const { schemas } = require("../models/user");

const {
  register,
  login,
  getCurrent,
  logout,
  getCurrentUser,
  updateUser,
} = require("../controllers");

const authRouter = express.Router();

const { validateBody, authenticate } = require("../middlewares");

// Registration  (signup)
// validateBody(schemas.registerSchema),
authRouter.post("/register", validateBody(schemas.registerSchema), register);

// LogIn (signin)
authRouter.post("/login", validateBody(schemas.loginSchema), login);

// Get current user
authRouter.get("/current", authenticate, getCurrent);

// 🟨Написати прошарок авторизації  (хз що це)

// Get info about user
authRouter.get("/current/user", authenticate, getCurrentUser);

// Refresh
authRouter.put(
  "/user/update",
  authenticate,
  validateBody(schemas.updateUserSchema),
  updateUser
);

// LogOut
authRouter.post("/logout", authenticate, logout);

module.exports = authRouter;
