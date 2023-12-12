const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const routes = require("./routes/todoRoutes.js");

const app = express();

// Body parser middleware
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
// Routes
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});
app.use(routes);
// Start server
const PORT = 8000;
mongoose.connect("mongodb+srv://waseem:netixsol.93@netixsol.bvi8glx.mongodb.net/?retryWrites=true&w=majority").then((db) => {
	app.listen(PORT, () => console.log("app is running on port 8000 and db connected"));
});
