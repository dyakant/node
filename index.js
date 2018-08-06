const express = require("express");
const router = require("./api");
const bodyParser = require("body-parser");
const items = require('./items');

const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded());
app.use("/api", router);

app.get("/login", (req,res) => {
  res.render('login');
})


app.get("/", (req, res) => {
  res.render('index', {title: "Hi", message: "Hello", items});
})

app.post("/", (req, res) => {
  console.log("post method");
  res.send("post method");
})




app.listen(3000);