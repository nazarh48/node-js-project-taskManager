
const Task = require('../models/task')
const getAllTasks = (req, res)=>{
    res.send('get all tasks')
}

const createTask = async (req, res)=>{
    let task = await Task.create(req.body)
    res.status(201).json(req.body); // here getting from the user by postman body
}

const getTask = (req, res)=>{
    res.json({id:req.params.id}) //id: will go to response in postman
}

const updateTask = (req, res)=>{
    res.send('update task')
}

const deleteTask = (req, res)=>{
    res.send('delete task')
}


module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask
}