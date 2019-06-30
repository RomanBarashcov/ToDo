import * as types from "../constants/action_types";

export const toDoCompleted = (todoList) => {
    return {
        type: types.TODO_COMPLETED,
        todoList
    }
};

export const completeTodo = (todoId) => {
  return (dispatch, getState) => {

    let state = getState();
    let oldTodos = state.todos.list;
    let newTodos = [];

    oldTodos.forEach((i) => {

      if(i.id === todoId) {
        i.complete = true;
      }  

       newTodos.push(i);
    })

    dispatch(toDoCompleted(newTodos));

  };
};

export default completeTodo;
