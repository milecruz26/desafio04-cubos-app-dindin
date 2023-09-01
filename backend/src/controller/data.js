const { json } = require("express");
const fs = require("fs/promises");

const searchListUsers = async () => {
  return JSON.parse(await fs.readFile("./src/database.json"));
};

const writeFileUsers = async (users) => {
  await fs.readFile("./src/database.json", JSON.stringify(users));
};

module.exports = {
  searchListUsers,
  writeFileUsers,
};
