import * as types from "../constants/action_types";
import * as queries from "../constants/queries";
import GRAPH_QL_URL from "../constants/hosts";
import errorHandler from "../handlers/fetch_error_handler";

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
    let newTodos = { description: description, createdAt: createAt, completed: completed, priority: priority };

    const fetchOptions = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ 
        query: queries.CreateTaskMutationQuery,
        variables: newTodos,
      })
    };

    return fetch(`${GRAPH_QL_URL}/graphql`, fetchOptions)
      .then(response => {
          return response.json();
      })
      .then(json => {
        debugger;
        newTodos.id = json.data.id;
        newTodos = [newTodos].concat(todoList);
        dispatch(toDoCreated(newTodos));
      })
      .catch(e => errorHandler(e));
  };
};

export default createToDo;
