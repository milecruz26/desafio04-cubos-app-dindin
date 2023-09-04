const {
  contas,
  saques,
  depositos,
  transferencias,
} = require("../bancodedados");
let numero = 1;

const createUser = async (req, res) => {
  const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;
  if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) {
    return res
      .status(400)
      .json({ status: "Error", message: "O campo nome é obrigatorio" });
  }

  //fazer a decteção se e uma string com todos.
  if (!isNaN(nome) || !isNaN(email)) {
    return res.status(400).json({
      status: "Error",
      message: "Não pode ser um numero",
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
      numero,
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

    return res.status(201).json({ message: "usuario cadastrado com sucesso" });
  } catch (error) {
    return res.status(500).json({ message: erro.message });
  }
};

const getAllUser = async (req, res) => {
  return res.status(200).json(contas);
  // const { contas } = req.query;

  // try {
  //   let listOfContas = await searchListUsers();

  //   if (contas) {
  //     const everyContas = listOfContas.every((p) => {
  //       return p.contas === contas;
  //     });
  //     const someContas = listOfContas.some((p) => {
  //       return p.contas === contas;
  //     });
  //     listOfContas = listOfContas.filter((p) => {
  //       return p.contas === contas;
  //     });
  //     return res.status(200).json({ listOfContas, everyContas, someContas });
  //   }
  // } catch (error) {
  //   return res.status(500).json({ message: erro.message });
  // }
};

// const deleteUsers = async (req, res) => {
//   const { contas } = req.params;

//   try {
//     const listOfContas = await searchListUsers();

//     const listDeleteContas = listOfContas.filter((p) => p.nome !== nome);

//     if (listDeleteContas.length === listOfContas.length) {
//       return res
//         .status(404)
//         .json({ message: "tamanho da lista esta igual, voce modificou?" });
//     }
//     writeFileUsers(listDeleteContas);

//     return res.status(200).json({ message: "usuario deletado com sucesso" });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

// const updateUser = async (req, res) => {
//   const { contas } = req.params;
//   const { saques, depositos, transferencias } = req.body;

//   try {
//     let listOfContas = await searchListUsers();

//     let listToUpdateUser = listOfContas.find((p) => p.nome === nome);

//     if (listToUpdateUser) {
//       listToUpdateUser.saques = saques || listToUpdateUser;
//       listToUpdateUser.depositos = depositos || listToUpdateUser;
//       listToUpdateUser.transferencias = transferencias || listToUpdateUser;
//     }
//     const indexToUpdate = listOfContas.indexOf((p) => p.contas === contas);

//     listOfContas[indexToUpdate] = {
//       contas,
//       saques: listToUpdateUser.saques,
//       depositos: listToUpdateUser.depositos,
//       transferencias: listToUpdateUser.transferencias,
//     };

//     await writeFileUsers(listOfContas);
//     return res.status(204).json({ message: "Usuario atualizado com sucesso " });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

module.exports = {
  // updateUser,
  // deleteUsers,
  getAllUser,
  createUser,
};
