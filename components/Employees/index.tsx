import React, { FC } from "react";
import { fetchEmployees } from "@/helpers/employees";
import EmployeeCard from "../EmployeeCard";

const Employees: FC = async () => {
  const employees = await fetchEmployees();

  return (
    <div>
      {employees.map((employee) => (
        <EmployeeCard key={employee.id} {...employee} />
      ))}
    </div>
  );
};

export default Employees;
