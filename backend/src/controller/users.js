const { writeFileUsers, searchListUsers } = require("../controller/data");

const createUser = async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    res.json({ erro: "o campo nome é obrigatorio" });
    return;
  }

  if (typeof req.body.name === "string") {
    res.status(400);
    res.json({ erro: "o campo nome precisa ser do tipo string" });
  }

  if (!isNaN(req.body, name)) {
    res.status(400);
    res.json({ erro: "não pode ser numero dentro de string" });
    return;
  }

  const { contas, saques, depositos, transferencias } = req.body;

  try {
    const users = await searchListUsers();

    users.push({ contas, saques, depositos, transferencias });

    await writeFileUsers(users);

    return res.status(201).json({ message: "usuario cadastrado com sucesso" });
  } catch (error) {
    return res.status(500).json({ message: erro.message });
  }
};

const getAllUser = async (req, res) => {
  const { contas } = req.query;

  try {
    let listOfContas = await searchListUsers();

    if (contas) {
      const everyContas = listOfContas.every((p) => {
        return p.contas === contas;
      });
      const someContas = listOfContas.some((p) => {
        return p.contas === contas;
      });
      listOfContas = listOfContas.filter((p) => {
        return p.contas === contas;
      });
      return res.status(200).json({ listOfContas, everyContas, someContas });
    }
  } catch (error) {
    return res.status(500).json({ message: erro.message });
  }
};

const deleteUsers = async (req, res) => {
  const { contas } = req.params;

  try {
    const listOfContas = await searchListUsers();

    const listDeleteContas = listOfContas.filter((p) => p.nome !== nome);

    if (listDeleteContas.length === listOfContas.length) {
      return res
        .status(404)
        .json({ message: "tamanho da lista esta igual, voce modificou?" });
    }
    writeFileUsers(listDeleteContas);

    return res.status(200).json({ message: "usuario deletado com sucesso" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  const { contas } = req.params;
  const { saques, depositos, transferencias } = req.body;

  try {
    let listOfContas = await searchListUsers();

    let listToUpdateUser = listOfContas.find((p) => p.nome === nome);

    if (listToUpdateUser) {
      listToUpdateUser.saques = saques || listToUpdateUser;
      listToUpdateUser.depositos = depositos || listToUpdateUser;
      listToUpdateUser.transferencias = transferencias || listToUpdateUser;
    }
    const indexToUpdate = listOfContas.indexOf((p) => p.contas === contas);

    listOfContas[indexToUpdate] = {
      contas,
      saques: listToUpdateUser.saques,
      depositos: listToUpdateUser.depositos,
      transferencias: listToUpdateUser.transferencias,
    };

    await writeFileUsers(listOfContas);
    return res.status(204).json({ message: "Usuario atualizado com sucesso " });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
