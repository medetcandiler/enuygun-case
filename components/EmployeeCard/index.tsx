"use client";
import { FC, useState } from "react";
import { IEmployee } from "@/helpers/employee/interface";
import { fetcher } from "@/lib/fetcher";
import { UPVOTE_EMPLOYEES_MUTATION } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const CardContainer = styled.div`
  position: relative;
  display: flex;
  width: 250px;
  flex-direction: column;
  align-items: center;
  padding: 30px 15px;
  gap: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-align: center;
  color: #212529;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    transform: scale(1.1);
  }
`;

const Name = styled.h2`
  font-size: 18px;
  overflow: hidden;
`;

const JobTitle = styled.h2`
  font-size: 12px;
  color: #343a40;
  overflow: hidden;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
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

const VoteButton = styled.button`
  padding: 8px 10px;
  font-size: 16px;
  background-color: #2dc44c;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1f9d33;
  }
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
`;

const EmployeeCard: FC<IEmployee> = ({ id, name, jobTitle, avatar, votes }) => {
  const [localeVote, setLocaleVote] = useState(votes);
  const handleUpVote = async () => {
    const res = await fetcher(
      JSON.stringify({ query: UPVOTE_EMPLOYEES_MUTATION, variables: { id } })
    );
    setLocaleVote(res.increaseVotes.votes);
  };
  return (
    <CardContainer>
      <StyledLink href={`/employees/${id}`}>
        <StyledImage
          src={avatar}
          alt={name}
          width={100}
          height={100}
          priority
        />
        <Name>{name}</Name>
        <JobTitle>{jobTitle}</JobTitle>
      </StyledLink>
      <Votes>{localeVote}</Votes>
      <VoteButton onClick={() => handleUpVote()}>
        Vote for {name.split(" ")[0]}
      </VoteButton>
    </CardContainer>
  );
};

export default EmployeeCard;
