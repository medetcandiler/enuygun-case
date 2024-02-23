import { FC } from "react";
import { IEmployee } from "@/helpers/employee/interface";
import Link from "next/link";
import Image from "next/image";

const EmployeeCard: FC<IEmployee> = ({
  id,
  name,
  jobTitle,
  avatar,
  votes,
}) => {
  return (
    <div>
      <Link href={`/${id}`}>
        <Image src={avatar} alt={name} width={100} height={100} />
        <h2>{name}</h2>
        <h2>{jobTitle}</h2>
        <h2>{votes}</h2>
      </Link>
      <button>Vote Up</button>
    </div>
  );
};

export default EmployeeCard;
