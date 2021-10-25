const {Client} = require('pg')
const client = new Client({
  user: "postgres",
  password: "1234", 
  host: "localhost",
  port: 5432,
  database: "myDB"
})

client.connect()
.then(() => console.log("Connected Successfully"))
.then(() => client.query("select * from unidb"))
.then(results => console.table(results.rows))
.catch(e => console.log)
.finally(() => client.end())

const express = require('express')
const port = 3000;

const app = express();
const db = require("./src/db");

app.use(express.json());

const studentRouter = require('./db/routes/student');

app.use('/student', studentRouter);

app.listen(port, () =>
  console.log(`Server running at http://localhost:$(port)`)
);