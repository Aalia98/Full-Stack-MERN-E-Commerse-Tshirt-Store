const express = require('express');

const app = express();

const port = 8000;

app.get("/", (req, res) => {
  return res.send("Home page");
});

const admin = (req, res) => {
  return res.send("This is admin dashboard");
};

const isAdmin = (req, res, next) => {
  console.log("isAdmin is running");
  next();
};

const isLoggedIn = (req, res, next) => {
  console.log("isLoggedIn is running");
  next();
};

app.get("/admin", isLoggedIn, isAdmin, admin);

app.get("/login", (req, res) => {
  return res.send("You are visiting login route");
});

app.get("/signup", (req, res) => {
  return res.send("You are visiting signup route");
});

app.listen(port, () => {
  console.log("Server is up and running...");
});