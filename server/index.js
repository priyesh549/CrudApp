const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require('cors');

app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "123456",
  database: "employeeSystem",
});

app.post("/create", (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const wage = req.body.wage;

  db.query(
    "INSERT INTO employees  (name,age,country,position,wage) values (?,?,?,?,?)",
    [name, age, country, position, wage]
  );
});

app.listen(3001, () => {
  console.log("Hey,Your port is running on 3001");
});
