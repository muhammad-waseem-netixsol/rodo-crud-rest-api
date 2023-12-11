const todoControllers = require("../controllers/todo.js");

const express = require("express");
const router = express.Router();

// todo app routes
router.post("/todo", todoControllers.postCreateNewTodo);
router.get("/todos", todoControllers.getAllTodos);
router.post("/edit", todoControllers.postEditTodo);
router.post("/remove", todoControllers.postDelete);
router.post("/mark", todoControllers.postMarkAsDone)
module.exports = router;