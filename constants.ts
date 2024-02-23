export const EMPLOYEES_COUNTER = 20;
export const GET_EMPLOYEES_QUERY = `
  query GetEmployees {
    employees {
      id,
      name,
      jobTitle,
      avatar,
      votes
    }
  }
`;
