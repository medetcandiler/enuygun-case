"use client";
import { IEmployees } from "@/helpers/employees/interface";
import EmployeeCard from "../EmployeeCard";
import styled from "styled-components";
import { FC } from "react";

const SectionContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  padding: 20px;
  background-color: #f4f4f4;
`;

const EmployeesWrapper: FC<{ employees: IEmployees }> = ({ employees }) => {
  return (
    <SectionContainer>
      {employees.map((employee) => (
        <EmployeeCard key={employee.id} {...employee} />
      ))}
    </SectionContainer>
  );
};

export default EmployeesWrapper;
