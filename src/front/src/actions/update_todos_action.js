import * as types from "../constants/action_types";;

export const toDosUpdated = (todoList) => {
  return {
    type: types.TODOS_UPDATED,
    todoList
  };
};

export const updateToDos = (todoId, description, createdAt, completed, priority) => {
  return (dispatch, getState) => {

    let state = getState();
    let oldToDoList = state.todos;
    let updatedToDos = [];

    let todo = { id: todoId, description: description, createdAt: createdAt, completed: completed, priority: priority };
    oldToDoList.forEach((i) => { i.id === todoId ? updatedToDos.push(todo) : updatedToDos.push(i) });

    dispatch(toDosUpdated (updatedToDos));

  };
};

export default updateToDos;
