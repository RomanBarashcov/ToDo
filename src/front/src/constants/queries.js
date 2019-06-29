export const ListTodosQuery = `
  query {
    ListTodos($orderBy, $ascOrDesc, $filteredByCompleted): {
      tasks: {
          id
          description
          createdAt
          complete
          priority
      }
    }
  }
`;