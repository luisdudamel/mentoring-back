require("dotenv").config();
const express = require("express");
const { getUsers } = require("../controllers/usersController");

const usersRouter = express.Router();

usersRouter.get("/", getUsers);

module.exports = usersRouter;
