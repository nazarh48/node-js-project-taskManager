// data from here will go to the models/task
const { findByIdAndDelete } = require('../models/task');
const Task = require('../models/task')
const getAllTasks = async (req, res) => {
    try {
        let data = await Task.find({});
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ status:'success', data: {tasks, nbHits: tasks.length} })
    }
}

const createTask = async (req, res) => {
    try {
        let task = await Task.create(req.body); // here getting from the user by postman body
        res.status(201).json(req.body);
    } catch (error) {
        res.status(500).json({ msg: error })

    }
}

const getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params // destructuring the id from req.params
        let task = await Task.findOne({ _id: taskID })
        console.log(task)
        if (!task) {
            return res.status(404).json({ msg: `task with the id: ${taskID} not found` })
        }
        res.status(200).json({ task }) //id: will show in response in postman

    } catch (error) {
        res.status(500).json({ msg: error })

    }
}

const updateTask = async (req, res) => {
    try {
        const {id: taskID } = req.params;
        let task = await Task.findByIdAndUpdate({_id: taskID}, req.body, {
            new: true,
            runValidators:true
        });
        if (!task) {
            return res.status(404).json({ msg: `task with the id: ${taskID} not found`})
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        let task = await Task.findByIdAndDelete({ _id: taskID })
        if (!task) {
            return res.status(404).json({ msg: `task with the id: ${taskID} not found` })
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

const editTask = async (req, res) => {
    try {
        const {id: taskID } = req.params;
        let task = await Task.findByIdAndUpdate({_id: taskID}, req.body, {
            new: true,
            runValidators:true,
            overwrite: true
        });
        if (!task) {
            return res.status(404).json({ msg: `task with the id: ${taskID} not found`})
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}


module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask, editTask,
}