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
} = require("../controller/users");

const routes = express();

routes.get("/", getAllUser);
routes.get("/saldo", getSaldo);
routes.get("/extrato", getExtrato);
routes.post("/register", createUser);
routes.post("/deposito/:numberOfConta", deposito);
routes.post("/transferencia/", transferencia);
routes.put("/update/:numberOfConta", updateUser);
routes.delete("/delete/:numberOfConta", deleteUsers);

module.exports = routes;
