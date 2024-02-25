import { fetchEmployee } from "@/helpers/employee";
import { redirect } from "next/navigation";
import EmployeeInfoCard from "@/components/EmployeeInfoCard";

const page = async ({ params }: { params: { id: string } }) => {
  const employee = await fetchEmployee(params.id);

  if (employee === null) return redirect("/");

  return (
    <>
      <EmployeeInfoCard employee={employee} />
    </>
  );
};

export default page;
