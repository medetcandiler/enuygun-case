export const EMPLOYEES_COUNTER = 20;
export const GET_EMPLOYEES_QUERY = `
  query GetEmployees {
    allEmployees {
      id,
      name,
      jobTitle,
      avatar,
      votes 
    }
  }
`;

export const GET_EMPLOYEE_QUERY = `
query GetEmployee($id: ID!) {
  Employee(id: $id) {
    id
    name
    email
    avatar
    birthdate
    registeredAt
    jobTitle
    votes
  }
}
`;

export const UPVOTE_EMPLOYEE_MUTATION = `
mutation UpvoteEmployeeMutation($id: ID!, $votes: Int!) {
  updateEmployee(id: $id, votes: $votes ) {
    id,
    name,
    avatar,
    votes
  }
}
`;
