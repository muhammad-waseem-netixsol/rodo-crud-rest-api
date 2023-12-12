const Todo = require("../models/todo");
// post add todo
exports.postCreateNewTodo = (req, res, next) => {
    const text = req.body.text;
    if(text === ""){
        return res.json({validationError : "you have entered empty todo..."})
     }
    const todo = new Todo({
        text,
        status: "TODO"
    });
    todo.save().then(rec => {
        res.json(rec);
    }).catch(err => {
        res.json({msg: "error"}); 
    })
};
// get all todos
exports.getAllTodos = (req, res, post) => {
    Todo.find().then(todos => {
        res.json(todos);
    }).catch(err => res.json({err: "error"}));
};
// edit todo
exports.postEditTodo = (req, res, post) => {
    const id = req.body.id;
    const text = req.body.text;
    const status = req.body.status;
    if(text === ""){
       return res.json({validationError : "you have entered empty todo..."})
    }
    const updated = {
        text,
        status
    };
    const filter = {
		_id: id,
	};
    Todo.updateOne(filter, updated).then(updatedTodo => res.json(updatedTodo)).catch(err => res.json({err: "error"}))
};
// delete todo
exports.postDelete = (req, res, next) => {
    const id = req.body.id;
    Todo.deleteOne({_id:id}).then(del => res.send(del)).catch(err => res.send({err: "error occured!"}))
};
// change status
exports.postMarkAsDone = (req, res, next) => {
    const id = req.body.id;
    const text = req.body.text;
    const filter = {_id:id};
    const update = {text,status: "DONE"};
    Todo.updateOne(filter,update).then(marked => res.json(marked)).catch(err => res.json({err: "error"}));
};
