import Link from "next/link";
import Image from "next/image";
import { IEmployee } from "@/helpers/employee/interface";
import { FC } from "react";
import styled from "styled-components";

const Name = styled.h1`
  font-size: 16px;
  margin: 0;
  transition: all 0.3s ease;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
  transition: all 0.3s ease;
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    & ${Name} {
      color: blue;
    }
    & ${Avatar}{
      transform: scale(1.05)
    }
  }
`;



const EmployeesNavCard: FC<IEmployee> = ({ id, name, jobTitle, avatar }) => {
  return (
    <Link href={`/employees/${id}`} passHref>
      <CardContainer>
        <Avatar src={avatar} alt={`${name}'s avatar`} />
        <Name>{name}</Name>
      </CardContainer>
    </Link>
  );
};

export default EmployeesNavCard;
