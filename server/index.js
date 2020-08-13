const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES

//Create a todo
app.post("/todos", async (req, res) => {
  try {
    console.log(req.body);
  } catch (error) {
    console.error(error.message);
  }
});

//Get all todos
app.listen(5000, () => {
  console.log("server has started on port 5000");
});
