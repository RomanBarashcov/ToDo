
export const ListTodosQuery = `query ListTodos($orderBy: String!, $ascOrDesc: Boolean!, $filteredByCompleted: Boolean!) {
  ListTodos(orderBy: $orderBy, ascOrDesc: $ascOrDesc, filteredByCompleted: filteredByCompleted)
}`;