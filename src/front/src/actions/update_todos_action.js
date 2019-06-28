import * as types from "../constants/action_types";;

export const toDosUpdated = (todoList) => {
  return {
    type: types.TODOS_UPDATED,
    todoList
  };
};

export const updateToDos = (todoId, description, createAt, complete, priority) => {
  return (dispatch, getState) => {

    let state = getState();
    let oldToDoList = state.todos.list;
    let updatedToDos = [];

    let todo = { id: todoId, description: description, createAt: createAt, complete: complete, priority: priority };
    oldToDoList.forEach((i) => { i.id === todoId ? updatedToDos.push(todo) : updatedToDos.push(i) });

    dispatch(toDosUpdated (updatedToDos));

  };
};

export default updateToDos;
