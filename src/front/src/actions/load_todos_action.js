import * as types from "../constants/action_types";
import * as queries from "../constants/queries";
import GRAPH_QL_URL from "../constants/hosts";

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

    let orderBy = "priority";
    let ascOrDesc = false;
    let filteredByCompleted = false;

    const fetchOptions = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ 
        query: queries.ListTodosQuery,
        variables: { orderBy, ascOrDesc, filteredByCompleted },
      })
    };

    dispatch(loadingToDos());

    return fetch(`${GRAPH_QL_URL}/graphql`, fetchOptions)
      .then(response => {
          return response.json();
      })
      .then(json => {
        dispatch(toDoLoaded(json.data.ListTodos));
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
