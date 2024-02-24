import { fetchEmployee } from "@/helpers/employee";
import { redirect } from "next/navigation";
import EmployeeInfoCard from "@/components/EmployeeInfoCard";

const page = async ({ params }: { params: { id: string } }) => {
  const employee = await fetchEmployee(params.id);

  if (employee === null) return redirect("/");

  return (
    <section style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <EmployeeInfoCard employee={employee} />
    </section>
  );
};

export default page;
