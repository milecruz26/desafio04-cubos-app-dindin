const {
  contas,
  saques,
  depositos,
  transferencias,
} = require("../bancodedados");

const fs = require("fs");
const path = require("path");

const databasePath = path.join(__dirname, "..", "database.json");

const createUser = async (req, res) => {
  try {
    const data = fs.readFileSync(databasePath, "utf-8");
    const users = JSON.parse(data);

    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;
    if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) {
      return res
        .status(400)
        .json({ status: "Error", message: "O campo nome é obrigatório" });
    }

    const cpfExists = users.some((user) => user.usuario.cpf === cpf);
    if (cpfExists) {
      return res.status(400).json({
        status: "Error",
        message: "Esse CPF já está em uso",
      });
    }

    if (!isNaN(nome) || !isNaN(email) || !isNaN(senha)) {
      let errorMessage = "Os seguintes campos não podem ser apenas números: ";
      if (!isNaN(nome)) errorMessage += "nome, ";
      if (!isNaN(email)) errorMessage += "email, ";
      if (!isNaN(senha)) errorMessage += "senha, ";

      errorMessage = errorMessage.slice(0, -2);
      return res.status(400).json({
        status: "Error",
        message: errorMessage,
      });
    }

    if (typeof nome !== "string") {
      return res.status(400).json({
        status: "Error",
        message: "O campo nome precisa ser do tipo string",
      });
    }

    // Atualize a variável numberOfConta com base no número de contas existentes
    const numberOfConta = users.length + 1;

    const newUser = {
      numberOfConta,
      saldo: 0,
      usuario: {
        nome,
        cpf,
        data_nascimento,
        telefone,
        email,
        senha,
      },
    };
    users.push(newUser);

    const usersJSON = JSON.stringify(users, null, 2);
    fs.writeFileSync(databasePath, usersJSON);

    return res.status(201).json({ message: "Usuário cadastrado com sucesso" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAllUser = async (req, res) => {
  try {
    const data = fs.readFileSync(databasePath, "utf-8");
    const users = JSON.parse(data);

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;
  const { numberOfConta } = req.params;

  if (!nome && !cpf && !data_nascimento && !telefone && !email && !senha) {
    return res
      .status(400)
      .json({ status: "Error", message: "Nenhum campo para atualizar" });
  }

  try {
    const data = fs.readFileSync(databasePath, "utf-8");
    const users = JSON.parse(data);

    const contaIndex = users.findIndex(
      (conta) => conta.numberOfConta === parseInt(numberOfConta)
    );

    if (contaIndex === -1) {
      return res
        .status(404)
        .json({ status: "Error", message: "Conta não encontrada" });
    }

    if (nome) users[contaIndex].usuario.nome = nome;
    if (cpf) users[contaIndex].usuario.cpf = cpf;
    if (data_nascimento)
      users[contaIndex].usuario.data_nascimento = data_nascimento;
    if (telefone) users[contaIndex].usuario.telefone = telefone;
    if (email) users[contaIndex].usuario.email = email;
    if (senha) users[contaIndex].usuario.senha = senha;

    const usersJSON = JSON.stringify(users, null, 2);
    fs.writeFileSync(databasePath, usersJSON);

    return res
      .status(200)
      .json({ message: "Dados da conta atualizados com sucesso" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteUsers = async (req, res) => {
  const { numberOfConta } = req.params;

  try {
    const data = fs.readFileSync(databasePath, "utf-8");
    const users = JSON.parse(data);

    const contaIndex = users.findIndex(
      (conta) => conta.numberOfConta === parseInt(numberOfConta)
    );

    if (contaIndex === -1) {
      return res
        .status(404)
        .json({ status: "Error", message: "Conta não encontrada" });
    }

    users.splice(contaIndex, 1);

    const usersJSON = JSON.stringify(users, null, 2);
    fs.writeFileSync(databasePath, usersJSON);

    return res.status(200).json({ message: "Conta excluída com sucesso!" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deposito = async (req, res) => {
  try {
    const { numeroConta, valor } = req.body;

    if (!numeroConta || !valor) {
      return res.status(400).json({
        status: "Error",
        message: "Número da conta e valor do depósito são obrigatórios",
      });
    }

    if (isNaN(valor) || valor <= 0) {
      return res.status(400).json({
        status: "Error",
        message: "O valor do depósito deve ser um número maior que zero",
      });
    }

    const data = fs.readFileSync(databasePath, "utf-8");
    const users = JSON.parse(data);

    const contaIndex = users.findIndex(
      (conta) => conta.numberOfConta === parseInt(numeroConta)
    );

    if (contaIndex === -1) {
      return res
        .status(404)
        .json({ status: "Error", message: "Conta não encontrada" });
    }

    const conta = users[contaIndex];
    conta.saldo += parseFloat(valor);

    const usersJSON = JSON.stringify(users, null, 2);
    fs.writeFileSync(databasePath, usersJSON);

    return res.status(200).json({ message: "Depósito realizado com sucesso!" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
module.exports = {
  updateUser,
  deleteUsers,
  getAllUser,
  createUser,
  deposito,
};
