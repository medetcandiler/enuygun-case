import {gql} from "graphql-tag";

export const typeDefs = gql`
  extend schema {
    mutation: Mutations
  }

  type Query {
    employees: [Employee]
    employee(id: String!): Employee
  }

  type Mutations {
    increaseVotes(id: String!): Employee
    decreaseVotes(id: String!): Employee
  }

  type Employee {
    id: String!
    name: String!
    email: String!
    jobTitle: String!
    avatar: String!
    birthdate: String!
    registeredAt: String!
    votes: Int!
  }
`;