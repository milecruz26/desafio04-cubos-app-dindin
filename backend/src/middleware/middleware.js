const fs = require("fs/promises");

const verifyIfUserExist = async (req, res, next) => {
  const { conta } = req.params;
  const { conta: contaBody } = req.body;

  try {
    const listOfContas = JSON.parse(await fs.readFile("./src/database.json"));

    const contaExist = listOfContas.find(
      (exist) => exist.conta === (conta || contaBody)
    );

    if (contaExist) {
      return res.status(409).json({ message: "a conta ja foi cadastrada" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  next();
};

module.exports = {
  verifyIfUserExist,
};
