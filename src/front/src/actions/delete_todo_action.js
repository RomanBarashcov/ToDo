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
    let toDoList =  state.todos.list.filter(i => i.id !== todoId);
    dispatch(toDoDeleted(toDoList));

  };
};

export default deleteToDo;
