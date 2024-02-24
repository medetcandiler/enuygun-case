"use client";
import { fetchEmployees } from "@/helpers/employees";
import EmployeesNavCard from "../EmployeesNavCard";
import styled from "styled-components";
import BackToHomeButton from "../BackToHomeButton";

const Nav = styled.nav`
  width: auto;
  background-color: #f0f0f0;
  padding: 20px;
  height: 100vh;
  overflow-y: auto;
`;

const EmployeesNav = async () => {
  const employees = await fetchEmployees();
  return (
    <Nav>
      <BackToHomeButton />
      {employees.map((employee) => (
        <EmployeesNavCard key={employee.id} {...employee} />
      ))}
    </Nav>
  );
};

export default EmployeesNav;
