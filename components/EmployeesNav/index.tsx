'use client'
import { fetchEmployees } from "@/helpers/employees";
import EmployeesNavCard from "../EmployeesNavCard";
import styled from 'styled-components';

const Nav = styled.nav`
  width: auto;
  background-color: #f0f0f0;
  padding: 20px;
`;

const EmployeesNav = async () => {
  const employees = await fetchEmployees();
  return (
    <Nav>
      {employees.map((employee) => (
        <EmployeesNavCard key={employee.id} {...employee} />
      ))}
    </Nav>
  );
};

export default EmployeesNav;
