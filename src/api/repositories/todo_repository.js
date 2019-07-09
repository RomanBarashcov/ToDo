"use strict";

const db = require("../models/index");
const uuid = require('uuid-random');

const getTodos = async (orderBy = 'priority', ascOrDesc = false, filteredByCompleted = false) => {

    const direction = ascOrDesc ? 'ASC' : 'DESC';

     const todos = await db.Todo.findAll(
                 {  where: { completed: filteredByCompleted },
                    order: [
                        [orderBy, direction]
                ]}).map(i => i.dataValues);

    return todos;

};

const createTodo = async (description, complete, priority) => {

    const id = uuid();

    await db.Todo.create({
        id: id,
        description: description, 
        completed: complete,
        priority: priority
    });

    return id;
};

const updateTodo = async (todoId, description, priority) => {

    await db.Todo.update({
            description: description,
            priority: priority
        }, { where: { id: todoId }
    });

    return true;
};

const changeCompleteStatus = async (todoId, complete) => {

    await db.Todo.update({ completed: complete }, {where: { id: todoId }});
    return true;

};

const deleteTodo = async (todoId) => {

    await db.Todo.destroy({ where: { id: todoId }});
    return true;

};


module.exports = {
    getTodos: getTodos,
    createTodo: createTodo,
    updateTodo: updateTodo,
    changeCompleteStatus: changeCompleteStatus,
    deleteTodo: deleteTodo 
}