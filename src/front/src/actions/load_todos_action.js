import * as types from "../constants/action_types";;

export const toDoLoaded = (todoList) => {
  return {
    type: types.TODOS_LOADED,
    todoList
  };
};

export const loadingToDos = () => {
    return {
        type: types.LOADING_TODOS
    }
};

export const loadToDos = () => {
  return (dispatch) => {

    dispatch(loadingToDos());

    let todoList = [
        { id: 1, description: "Bay milk", cratedAt: new Date(), priority: 1, complete: false },
        { id: 2, description: "Bay bread", cratedAt: new Date(), priority: 2, complete: false },
        { id: 3, description: "Bay cerial", cratedAt: new Date(), priority: 3, complete: false }
    ]

    dispatch(toDoLoaded(todoList));

  };
};

export default loadToDos;
