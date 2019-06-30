"use strict";

const db = require("../models/index");
const uuid = require('uuid-random');

const getTasks = async (orderBy = "priority", ascOrDesc = false, filteredByCompleted = false) => {

    let direction = ascOrDesc ? "ASC" : "DESC";
    
    let tasks = await db.Task.findAll({ raw:true },
                { where: { 
                        complete: filteredByCompleted 
                    },
                 order: [
                    [orderBy, direction]
                ]});
    
    return tasks;

};

const createTask = async (description, createdAt, complete, priority) => {

    let id = uuid();

    await db.Task.create({
        id: id,
        description: description, 
        completed: complete, 
        createdAt: createdAt,
        priority: priority
    });
    console.log("IDDDD____", id);
    return id;
};
const updateTask = async (taskId, description, priority) => {

    await db.Task.create({
            description: description,
            priority: priority
        }, { where: { id: taskId }
    });

    return true;
};

const MarkToDoComplete = async (taskId, complete) => {

    await db.Task.update({ completed: complete }, {where: { id: taskId }});
    return true;

};

const deleteTask = async (taskId) => {

    await db.Task.update({ completed: true }, {where: { id: task.id }});
    return true;

};


module.exports = {
    getTasks: getTasks,
    createTask: createTask,
    updateTask: updateTask,
    MarkToDoComplete: MarkToDoComplete,
    deleteTask: deleteTask 
}