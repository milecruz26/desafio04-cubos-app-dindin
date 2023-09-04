const express = require("express");

const {
  updateUser,
  deleteUsers,
  getAllUser,
  createUser,
} = require("../controller/users");

const { verifyIfUserExist } = require("../middleware/middleware");

const routes = express();

routes.get("/", getAllUser);
routes.post("/register", verifyIfUserExist, createUser);
routes.put("/update/:conta", updateUser);
routes.delete("/delete/:conta", deleteUsers);

module.exports = routes;
