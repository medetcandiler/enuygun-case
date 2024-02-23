import { IEmployee } from "@/helpers/employee/interface";
import { createRandomEmployees } from "@/helpers/employees";

const employees = createRandomEmployees();

export const resolvers = {
  Query: {
    employees: () => employees,
    employee: (_: IEmployee, { id }: { id: string }) => {
      return employees.find((employee) => employee.id === id);
    },
  },
  Mutations: {
    increaseVotes: (_: IEmployee, { id }: { id: string }) => {
      let findEmployee = employees.find((employee) => employee.id === id);

      if (findEmployee) {
        findEmployee.votes += 1;
        return findEmployee;
      }

      return null;
    },
    decreaseVotes: (_: IEmployee, { id }: { id: string }) => {
      let findEmployee = employees.find((employee) => employee.id === id);

      if (findEmployee) {
        findEmployee.votes -= 1;
        return findEmployee;
      }

      return null;
    },
  },
};
