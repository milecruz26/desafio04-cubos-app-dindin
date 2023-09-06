const {
  contas,
  saques,
  depositos,
  transferencias,
} = require("../bancodedados");
let numberOfConta = 1;

const createUser = async (req, res) => {
  const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;
  if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) {
    return res
      .status(400)
      .json({ status: "Error", message: "O campo nome é obrigatório" });
  }

  const cpfExists = contas.some((conta) => conta.usuario.cpf === cpf);
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

  try {
    contas.push({
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
    });
    numberOfConta++;

    return res.status(201).json({ message: "usuario cadastrado com sucesso" });
  } catch (error) {
    return res.status(500).json({ message: erro.message });
  }
};

const getAllUser = async (req, res) => {
  return res.status(200).json(contas);
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
    const contaIndex = contas.findIndex(
      (conta) => conta.numberOfConta === parseInt(numberOfConta)
    );

    if (contaIndex === -1) {
      return res
        .status(404)
        .json({ status: "Error", message: "Conta não encontrada" });
    }

    if (nome) contas[contaIndex].usuario.nome = nome;
    if (cpf) contas[contaIndex].usuario.cpf = cpf;
    if (data_nascimento)
      contas[contaIndex].usuario.data_nascimento = data_nascimento;
    if (telefone) contas[contaIndex].usuario.telefone = telefone;
    if (email) contas[contaIndex].usuario.email = email;
    if (senha) contas[contaIndex].usuario.senha = senha;

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
    const contaIndex = contas.findIndex(
      (conta) => conta.numberOfConta === parseInt(numberOfConta)
    );

    if (contaIndex === -1) {
      return res
        .status(404)
        .json({ status: "Error", message: "Conta não encontrada" });
    }

    contas.splice(contaIndex, 1);

    return res.status(200).json({ message: "Conta excluída com sucesso!" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  updateUser,
  deleteUsers,
  getAllUser,
  createUser,
};
