import * as types from "../constants/action_types";;

export const toDoCreated = (todoList) => {
  return {
    type: types.TODO_CREATED,
    todoList
  };
};

export const createToDo = (description, createAt, completed, priority = 1) => {
  return (dispatch, getState) => {

    let state = getState();
    let todoList = state.todos.list;

    let newTodos = [{ id: 1, description: description, createdAt: createAt, completed: completed, priority: priority }];
    newTodos = newTodos.concat(todoList);

    dispatch(toDoCreated(newTodos));

  };
};

export default createToDo;
