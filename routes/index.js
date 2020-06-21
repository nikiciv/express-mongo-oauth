const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// Login/Landing page
// @route GET /ensureGuest
router.get("/", ensureGuest, (req, res) => {
  res.render("login", {
    layout: "login",
  });
});

// Dashboard page
// @route GET /dashboard
router.get("/dashboard", ensureAuth, (req, res) => {
  res.render("dashboard", {
    name: req.user.firstName,
  });
});

module.exports = router;
