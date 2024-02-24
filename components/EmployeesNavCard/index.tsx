import Link from "next/link";
import Image from "next/image";
import { IEmployee } from "@/helpers/employee/interface";
import { FC } from "react";

const EmployeesNavCard: FC<IEmployee> = ({ id, name, jobTitle, avatar }) => {
  return (
    <Link href={`/employees/${id}`}>
      <Image src={avatar} alt={`${name}'s avatar`} width={100} height={100} />
      <h1>{name}</h1>
    </Link>
  );
};

export default EmployeesNavCard;
