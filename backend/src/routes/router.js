const express = require("express");

const {
  updateUser,
  deleteUsers,
  getAllUser,
  createUser,
  deposito,
  transferencia,
  getSaldo,
  getExtrato,
  saque,
} = require("../controller/users");

const routes = express();

routes.get("/", getAllUser);
routes.get("/saldo", getSaldo);
routes.get("/extrato", getExtrato);
routes.post("/register", createUser);
routes.post("/deposito", deposito);
routes.post("/transferencia/", transferencia);
routes.post("/saque", saque);
routes.put("/update/:numberOfConta", updateUser);
routes.delete("/delete/:numberOfConta", deleteUsers);

module.exports = routes;
