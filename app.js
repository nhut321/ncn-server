const express = require("express");
const { routes } = require("./router");
const cors = require("cors");
const { db } = require("./config/db");
const app = express();
const port = 8888;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
db();
routes(app);

app.listen(port, () => console.log("Server connected at port: " + port));
