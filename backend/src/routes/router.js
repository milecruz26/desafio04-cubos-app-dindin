const express = require("express");

const {
  updateUser,
  deleteUsers,
  getAllUser,
  createUser,
  deposito,
} = require("../controller/users");

const routes = express();

routes.get("/", getAllUser);
routes.post("/register", createUser);
routes.put("/update/:numberOfConta", updateUser);
routes.delete("/delete/:numberOfConta", deleteUsers);
routes.post("/deposito/:numberOfConta", deposito);

module.exports = routes;
