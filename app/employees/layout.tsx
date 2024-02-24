import { Metadata } from "next";
import { FC, ReactNode } from "react";
import EmployeesNav from "@/components/EmployeesNav";

interface IEmployeesPageProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "ENUYGUN | EMPLOYEES",
};

const EmployeesLayout: FC<IEmployeesPageProps> = async ({ children }) => {
  return (
    <section style={{ display: "flex" }}>
      <EmployeesNav />
      {children}
    </section>
  );
};

export default EmployeesLayout;
