const express = require("express");

const routes = require("./routes/router");
const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000);
