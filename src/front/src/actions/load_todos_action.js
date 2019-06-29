import * as types from "../constants/action_types";
import * as queries from "../constants/queries";
import API_URL from "../constants/hosts";

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

export const loadToDos2 = () => {
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

export const loadToDos = () => {
  return (dispatch) => {

    const fetchOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ query: queries.ListTodosQuery })
    };

    dispatch(loadingToDos());

    return fetch(`${API_URL}`, fetchOptions)
      .then(response => {
          return response.json();
      })
      .then(json => {
        dispatch(toDoLoaded(json));
      })
      .catch(e => {
        if (e.name === "TypeError" && e.message === "Failed to fetch") {
          console.error(e);
          throw e;
        }

        if (!e.response) {
          console.log("!error.response");
          console.error(e.stack);
        }

        console.log("error");
        console.log(e);

        throw e;
      });
  };
};

export default loadToDos;
