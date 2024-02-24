"use client";
import { FC } from "react";
import { IEmployee } from "@/helpers/employee/interface";
import Link from "next/link";
import Image from "next/image";
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

const Avatar = styled(Image)`
  border-radius: 15px;
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
  width: 45px;
  display: grid;
  place-content: center;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  background: rgba(45, 196, 76, 0.7);
  padding: 10px;
  border-radius: 50%;
  color: #fff;
`;

const EmployeeInfoCard: FC<{ employee: IEmployee }> = ({ employee }) => {
  const { name, email, avatar, birthdate, registeredAt, jobTitle, votes } =
    employee;

  return (
    <CardContainer>
      <Avatar src={avatar} width={200} height={150} alt={name} priority />
      <SubContainer>
        <Label>
          İsim: <LabelContent>{name}</LabelContent>
        </Label>
        <Label>
          Ünvan: <LabelContent>{jobTitle}</LabelContent>
        </Label>
        <StyledLink href={`mailto:${email.toLocaleLowerCase()}`}>
          <Label>E-posta:</Label>{" "}
          <EmailLabel>{email.toLocaleLowerCase()}</EmailLabel>
        </StyledLink>
        <Label>
          Doğum Tarihi:{" "}
          <LabelContent>{formatDate(birthdate.toString())}</LabelContent>
        </Label>
        <Label>
          İşe Başlama Tarihi:{" "}
          <LabelContent>{formatDate(registeredAt.toString())}</LabelContent>
        </Label>
      </SubContainer>
      <Votes>{votes}</Votes>
    </CardContainer>
  );
};

export default EmployeeInfoCard;
