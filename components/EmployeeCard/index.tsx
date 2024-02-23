"use client";
import { FC, useState } from "react";
import { IEmployee } from "@/helpers/employee/interface";
import { fetcher } from "@/lib/fetcher";
import { UPVOTE_EMPLOYEES_MUTATION } from "@/constants";
import Link from "next/link";
import Image from "next/image";

const EmployeeCard: FC<IEmployee> = ({ id, name, jobTitle, avatar, votes }) => {
  const [localeVote, setLocaleVote] = useState(votes);
  const handleUpVote = async () => {
    const res = await fetcher(
      JSON.stringify({ query: UPVOTE_EMPLOYEES_MUTATION, variables: { id } })
    );
    setLocaleVote(res.increaseVotes.votes);
  };
  return (
    <div>
      <Link href={`/employees/${id}`}>
        <Image src={avatar} alt={name} width={100} height={100} />
        <h2>{name}</h2>
        <h2>{jobTitle}</h2>
        <h1>{localeVote}</h1>
      </Link>
      <button onClick={() => handleUpVote()}>+</button>
    </div>
  );
};

export default EmployeeCard;
