import { fetchEmployees } from "@/helpers/employees";
import EmployeesNavCard from "../EmployeesNavCard";

const EmployeesNav = async () => {
  const employees = await fetchEmployees();
  return (
    <nav>
      {employees.map((employee) => (
        <EmployeesNavCard key={employee.id} {...employee} />
      ))}
    </nav>
  );
};

export default EmployeesNav;
