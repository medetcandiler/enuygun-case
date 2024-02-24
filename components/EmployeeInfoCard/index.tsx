"use client";
import { FC } from "react";
import { IEmployee } from "@/helpers/employee/interface";
import Link from "next/link";
import styled from "styled-components";
import { formatDate } from "@/lib/dateFormatter";

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: #ffffff;
  color: #212529;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const Label = styled.p`
  font-weight: bold;
`;

const LabelContent = styled.span`
  font-weight: normal;
  color: #343a40;
`;

const EmailLabel = styled.span`
  transition: color 0.3s ease;

  &:hover {
    color: blue;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  gap: 5px;
`;

const Votes = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  background: #2dc44c;
  padding: 1rem;
  border-radius: 50%;
  color: #fff;
`;

const EmployeeInfoCard: FC<{ employee: IEmployee }> = ({ employee }) => {
  const { name, email, avatar, birthdate, registeredAt, jobTitle, votes } =
    employee;

  return (
    <CardContainer>
      <Avatar src={avatar} alt={name} />
      <SubContainer>
        <Label>
          Name: <LabelContent>{name}</LabelContent>
        </Label>
        <Label>
          Title: <LabelContent>{jobTitle}</LabelContent>
        </Label>
        <StyledLink href={`mailto:${email.toLocaleLowerCase()}`}>
          <Label>Email:</Label>{" "}
          <EmailLabel>{email.toLocaleLowerCase()}</EmailLabel>
        </StyledLink>
        <Label>
          Birthdate:{" "}
          <LabelContent>{formatDate(birthdate.toString())}</LabelContent>
        </Label>
        <Label>
          Start Date:{" "}
          <LabelContent>{formatDate(registeredAt.toString())}</LabelContent>
        </Label>
      </SubContainer>
      <Votes>{votes}</Votes>
    </CardContainer>
  );
};

export default EmployeeInfoCard;
