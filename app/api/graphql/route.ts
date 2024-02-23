import {startServerAndCreateNextHandler} from "@as-integrations/next";
import {ApolloServer} from "@apollo/server";
import {gql} from "graphql-tag";
import {NextRequest} from "next/server";
import {createRandomEmployees} from "@/helpers/employees";

const typeDefs = gql`
    extend schema {
        mutation: Mutations
    }

    type Query {
        employees : [Employee]
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

const employees = createRandomEmployees()

const resolvers = {
  Query: {
    employees: () => employees,
    employee: (_: any, {id}: { id: string }) => {
      return employees.find((employee) => employee.id === id)
    }
  },
  Mutations: {
    increaseVotes: (_: any, {id}: { id: string }) => {
      let findEmployee = employees.find((employee) => employee.id === id)

      if (findEmployee) {
        findEmployee.votes += 1
        return findEmployee
      }

      return null
    },
    decreaseVotes: (_: any, {id}: { id: string }) => {
      // TODO: Reverse of increase
      return null
    },
  }
};

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server);

export async function GET(request: NextRequest) {
  return handler(request);
}

export async function POST(request: NextRequest) {
  return handler(request);
}
