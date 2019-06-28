import * as types from "../constants/action_types";;

export const toDoDeleted = (todoList) => {
  return {
    type: types.TODO_DELETED,
    todoList
  };
};

export const deleteToDo = (todoId) => {
  return (dispatch, getState) => {
    
    let state = getState();
    dispatch(toDoDeleted(state.todos.filter(i => i.id !== todoId)));

  };
};

export default deleteToDo;
