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

export const GET_EMPLOYEE_QUERY = `
query GetEmployee($id: String!) {
  employee(id: $id) {
    id,
    name,
    email,
    avatar,
    birthdate,
    registeredAt
  }
}
`
