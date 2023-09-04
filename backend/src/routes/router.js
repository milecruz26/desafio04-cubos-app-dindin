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
// routes.put("/update/:contas", updateUser);
// routes.delete("/delete/:contas", deleteUsers);

module.exports = routes;
