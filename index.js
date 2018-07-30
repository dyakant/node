const express = require("express");
const router = require("./api");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json())
app.use("/api", router)

app.use((req,res, next) => {
  console.log("use method");
  next()
})
app.all("/", (req, res) => {
  console.log(`all method ${app}`);
  res.send("all method");
})

app.get("/", (req, res) => {
  console.log("get method");
  res.send("get method");
})

app.post("/", (req, res) => {
  console.log("post method");
  res.send("post method");
})




app.listen(3000);