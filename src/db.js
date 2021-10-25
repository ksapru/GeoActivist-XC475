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
