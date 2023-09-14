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
      transacoes: [],
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
    const removeTransacoes = (conta) => {
      const { transacoes, ...contaSemTransacoes } = conta;
      return contaSemTransacoes;
    };

    const contasSemTransacoes = users.map(removeTransacoes);

    return res.status(200).json(contasSemTransacoes);
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

    const transacao = {
      tipo: "Depósito",
      numberOfConta: conta.numberOfConta,
      data: new Date().toISOString(),
      valor: parseFloat(valor),
    };

    conta.transacoes.push(transacao);

    const usersJSON = JSON.stringify(users, null, 2);
    fs.writeFileSync(databasePath, usersJSON);

    return res.status(200).json({ message: "Depósito realizado com sucesso!" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const transferencia = async (req, res) => {
  try {
    const { numeroContaOrigem, numeroContaDestino, senha, valor } = req.body;

    if (
      !numeroContaOrigem ||
      !numeroContaDestino ||
      !senha ||
      valor === null ||
      valor <= 0
    ) {
      return res.status(400).json({
        status: "Error",
        message:
          "Número da conta de origem, número da conta de destino, senha e valor são obrigatórios e o valor deve ser maior que zero",
      });
    }

    const data = fs.readFileSync(databasePath, "utf-8");
    const users = JSON.parse(data);

    const contaOrigemIndex = users.findIndex(
      (conta) => conta.numberOfConta === parseInt(numeroContaOrigem)
    );

    if (contaOrigemIndex === -1) {
      return res
        .status(404)
        .json({ status: "Error", message: "Conta de origem não encontrada" });
    }

    const contaDestinoIndex = users.findIndex(
      (conta) => conta.numberOfConta === parseInt(numeroContaDestino)
    );

    if (contaDestinoIndex === -1) {
      return res
        .status(404)
        .json({ status: "Error", message: "Conta de destino não encontrada" });
    }

    const contaOrigem = users[contaOrigemIndex];
    if (contaOrigem.usuario.senha !== senha) {
      return res.status(401).json({
        status: "Error",
        message: "Senha incorreta para a conta de origem",
      });
    }

    if (contaOrigem.saldo < valor) {
      return res.status(400).json({
        status: "Error",
        message: "Saldo insuficiente na conta de origem",
      });
    }

    const contaDestino = users[contaDestinoIndex];

    const transacaoOrigem = {
      tipo: "transferenciasEnviadas",
      data: new Date().toISOString(),
      numeroContaOrigem: contaOrigem.numberOfConta,
      numeroContaDestino: contaDestino.numberOfConta,
      valor: parseFloat(valor),
    };

    contaOrigem.transacoes.push(transacaoOrigem);
    contaOrigem.saldo -= valor;

    const transacaoDestino = {
      tipo: "transferenciasRecebidas",
      data: new Date().toISOString(),
      numeroContaOrigem: contaOrigem.numberOfConta,
      numeroContaDestino: contaDestino.numberOfConta,
      valor: parseFloat(valor),
    };

    contaDestino.transacoes.push(transacaoDestino);
    contaDestino.saldo += valor;

    const usersJSON = JSON.stringify(users, null, 2);
    fs.writeFileSync(databasePath, usersJSON);

    return res
      .status(200)
      .json({ message: "Transferência realizada com sucesso!" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const getSaldo = async (req, res) => {
  try {
    const { numeroConta, senha } = req.query;

    if (!numeroConta || !senha) {
      return res.status(400).json({
        status: "Error",
        message: "Número da conta e senha são obrigatórios nos query params",
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

    if (conta.usuario.senha !== senha) {
      return res.status(401).json({
        status: "Error",
        message: "Senha incorreta para a conta",
      });
    }

    return res.status(200).json({ saldo: conta.saldo });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const saque = async (req, res) => {
  try {
    const { numeroConta, valor, senha } = req.body;

    if (!numeroConta || !valor || !senha) {
      return res.status(400).json({
        status: "Error",
        message:
          "Número da conta, valor do saque e senha são obrigatórios no corpo da requisição",
      });
    }

    if (isNaN(valor) || valor <= 0) {
      return res.status(400).json({
        status: "Error",
        message: "O valor do saque deve ser um número maior que zero",
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

    if (conta.usuario.senha !== senha) {
      return res.status(401).json({
        status: "Error",
        message: "Senha incorreta para a conta",
      });
    }

    if (conta.saldo < valor) {
      return res.status(400).json({
        status: "Error",
        message: "Saldo insuficiente na conta para realizar o saque",
      });
    }

    const transacao = {
      tipo: "Saque",
      numberOfConta: conta.numberOfConta,
      data: new Date().toISOString(),
      valor: parseFloat(valor),
    };

    conta.transacoes.push(transacao);
    conta.saldo -= valor;

    const usersJSON = JSON.stringify(users, null, 2);
    fs.writeFileSync(databasePath, usersJSON);

    return res.status(200).json({ message: "Saque realizado com sucesso!" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const getExtrato = async (req, res) => {
  try {
    const { numeroConta, senha } = req.query;

    if (!numeroConta || !senha) {
      return res.status(400).json({
        status: "Error",
        message: "Número da conta e senha são obrigatórios nos query params",
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

    if (conta.usuario.senha !== senha) {
      return res.status(401).json({
        status: "Error",
        message: "Senha incorreta para a conta",
      });
    }

    const transacoes = conta.transacoes;

    return res.status(200).json({ transacoes });
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
  transferencia,
  getSaldo,
  getExtrato,
  saque,
};
