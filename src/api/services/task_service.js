"use strict";

const db = require("../models/index");
var od = require("../infrastructure/operation_details");

const getTasks = async () => {
    try {

        let operationDetails = od();
        let tasks = await db.Task.findAll({raw:true});

        operationDetails = od(true, "", tasks);
        return operationDetails;

   } catch(err) {
       console.error(err);
       return operationDetails;
   }
};

const createTask = async (description, completed, priority) => {
    try {

        let operationDetails = od();
        let createAt = new Date();

        let createdTask = await db.Task.create({
            description: description, 
            completed: completed, 
            createAt: createAt,
            priority: priority
        });

        return  operationDetails(true, "", createdTask.id);

   } catch(err) {
       console.error(err);
       return operationDetails;
   }
};
const updateTask = async (taskId, description, completed, priority) => {
    try {

        let operationDetails = od();

        let task = await db.Task.findByPk(taskId);
        if(!task) return  operationDetails(false, "Can't find task by id", null);

        await db.Task.create({
                description: description, 
                completed: completed, 
                createAt: createAt,
                priority: priority
            }, { where: { id: taskId }
        });

        return operationDetails(true, "", null);

   } catch(err) {
       console.error(err);
       return operationDetails;
   }
};

const MarkToDoComplete = async (taskId) => {
    try {

        let operationDetails = od();

        let task = await db.Task.findByPk(taskId);
        if(!task) return  od(false, "Can't find task by id", null);

        await db.Task.update({ completed: true }, {where: { id: task.id }});

        return operationDetails(true, "", null);

   } catch(err) {
       console.error(err);
       return operationDetails;
   }
};

const deleteTask = async (taskId) => {
    try {

        let operationDetails = od();

        let task = await db.Task.findByPk(taskId);
        if(!task) return  od(false, "Can't find task by id", null);

        await db.Task.update({ completed: true }, {where: { id: task.id }});
        
        return operationDetails(true, "", null);

   } catch(err) {
       console.error(err);
       return operationDetails;
   }
};


module.exports = {
    getTasks: getTasks,
    createTask: createTask,
    updateTask: updateTask,
    MarkToDoComplete: MarkToDoComplete,
    deleteTask: deleteTask 
}