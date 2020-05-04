const express = require("express");
const routes = require("./routes");
require("./data")


const app = express();
app.use(express.json());
app.use(routes);
app.listen(3333);