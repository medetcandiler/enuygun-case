import { fetchEmployee } from "@/helpers/employee";
import { redirect } from "next/navigation";

const page = async ({ params }: { params: { id: string } }) => {
  const employee = await fetchEmployee(params.id);

  if (employee === null) return redirect("/");

  return <div>{JSON.stringify(employee)}</div>;
};

export default page;
