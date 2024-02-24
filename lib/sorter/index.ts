import { IEmployees } from "@/helpers/employees/interface";

export const sorter = (employees : IEmployees) => {
  console.log(employees)
  employees.sort((a, b) => b.votes - a.votes);

  return employees
};