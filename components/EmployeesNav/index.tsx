import { fetchEmployees } from "@/helpers/employees";
import EmployeesNavCard from "../EmployeesNavCard";
import BackToHomeButton from "../BackToHomeButton";

const EmployeesNav = async () => {
  const employees = await fetchEmployees();

  return (
    <nav className="employeesNav">
      <BackToHomeButton />
      {employees!.map((employee) => (
        <EmployeesNavCard key={employee.id} {...employee} />
      ))}
    </nav>
  );
};

export default EmployeesNav;
