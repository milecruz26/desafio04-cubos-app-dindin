const express = require("express");

const {
  updateUser,
  deleteUsers,
  getAllUser,
  createUser,
} = require("../controller/users");

const routes = express();

routes.get("/", getAllUser);
routes.post("/register", createUser);
routes.put("/update/:numberOfConta", updateUser);
routes.delete("/delete/:numberOfConta", deleteUsers);

module.exports = routes;
