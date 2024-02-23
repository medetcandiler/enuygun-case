import React, { FC } from "react";
import { fetchEmployees } from "@/helpers/employees";

const Employees: FC = async () => {
  const employees = fetchEmployees();

  return <div></div>;
};

export default Employees;
