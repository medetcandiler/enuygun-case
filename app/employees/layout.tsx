import { Metadata } from "next";
import { FC, ReactNode } from "react";
import { fetchEmployees } from "@/helpers/employees";
import EmployeeCard from "@/components/EmployeeCard";

interface IEmployeesPageProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "ENUYGUN | EMPLOYEES",
};

const EmployeesLayout: FC<IEmployeesPageProps> = async ({ children }) => {
  const employees = await fetchEmployees();
  console.log(employees, "in page");

  return (
    <section>
      {children}
      <div>
      {employees.map((employee) => (
        <EmployeeCard key={employee.id} {...employee} />
      ))}
    </div>
    </section>
  );
};

export default EmployeesLayout;
