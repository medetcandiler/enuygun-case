"use client";
import { FC, useState } from "react";
import { IEmployee } from "@/helpers/employee/interface";
import { fetcher } from "@/lib/fetcher";
import { UPVOTE_EMPLOYEES_MUTATION } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    transform: scale(1.1);
  }
`;

const Name = styled.h2`
  margin-top: 10px;
  font-size: 18px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit the number of lines to 2 */
  -webkit-box-orient: vertical;
`;

const JobTitle = styled.h2`
  font-size: 12px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit the number of lines to 2 */
  -webkit-box-orient: vertical;
`;

const VoteCount = styled.span`
  font-size: 24px;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0px;
`;

const VoteButton = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
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
        <Image src={avatar} alt={name} width={100} height={100} />
        <Name>{name}</Name>
        <JobTitle>{jobTitle}</JobTitle>
        <VoteCount>{localeVote}</VoteCount>
      </StyledLink>
      <VoteButton onClick={() => handleUpVote()}>+</VoteButton>
    </CardContainer>
  );
};

export default EmployeeCard;
