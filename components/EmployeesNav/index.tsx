"use client";
import { fetchEmployees } from "@/helpers/employees";
import EmployeesNavCard from "../EmployeesNavCard";
import styled from "styled-components";
import BackToHomeButton from "../BackToHomeButton";

const Nav = styled.nav`
  position: relative;
  width: auto;
  background-color: #2DC44C;
  padding: 50px 25px;
  height: 100vh;
  overflow-y: auto;

  @media (max-width: 700px) {
    width: full;
    display: flex;
    flex: nowrap;
    align-items: center;
    gap: 1rem;
    height: 100px;
    padding: 25px 50px;
  }
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
