import { FC } from "react";
import { IEmployee } from "@/helpers/employee/interface";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import Image from "next/image";

interface EmployeesNavCardProps extends IEmployee {}

const Name = styled.h1`
  font-size: 16px;
  transition: all 0.3s ease;
`;

const Avatar = styled(Image)`
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
    & ${Avatar} {
      transform: scale(1.05);
    }
  }
`;

const EmployeesNavCard: FC<EmployeesNavCardProps> = ({ id, name, avatar }) => {
  const pathname = usePathname();
  const isActive = pathname === `/employees/${id}`;

  return (
    <Link href={`/employees/${id}`}>
      <CardContainer>
        <Avatar src={avatar} width={50} height={50} alt={`${name}'s avatar`} />
        <Name className={isActive ? "active" : ""}>
          {name}
        </Name>
      </CardContainer>
    </Link>
  );
};

export default EmployeesNavCard;
