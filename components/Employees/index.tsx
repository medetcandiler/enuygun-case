import { FC } from "react";
import { fetchEmployees } from "@/helpers/employees";
import EmployeesWrapper from "../EmployeesWrapper";

const Employees: FC = async () => {
  const employees = await fetchEmployees();

  return <EmployeesWrapper employees={employees} />;
};

export default Employees;
