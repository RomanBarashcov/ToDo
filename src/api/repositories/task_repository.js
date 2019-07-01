"use strict";

const db = require("../models/index");

const getTasks = async (orderBy = 'priority', ascOrDesc = false, filteredByCompleted = false) => {

    const direction = ascOrDesc ? 'ASC' : 'DESC';

     const tasks = await db.Task.findAll(
                 {  where: { completed: filteredByCompleted },
                    order: [
                    [orderBy, direction]
                ]}).map(i => i.dataValues);

    return tasks;

};

const createTask = async (description, complete, priority) => {

    let task = await db.Task.create({
        description: description, 
        completed: complete,
        priority: priority
    });

    return task.dataValues.id;
};

const updateTask = async (taskId, description, priority) => {

    await db.Task.update({
            description: description,
            priority: priority
        }, { where: { id: taskId }
    });

    return true;
};

const changeCompleteStatus = async (taskId, complete) => {

    await db.Task.update({ completed: complete }, {where: { id: taskId }});
    return true;

};

const deleteTask = async (taskId) => {

    await db.Task.destroy({ where: { id: taskId }});
    return true;

};


module.exports = {
    getTasks: getTasks,
    createTask: createTask,
    updateTask: updateTask,
    changeCompleteStatus: changeCompleteStatus,
    deleteTask: deleteTask 
}