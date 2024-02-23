import { fetchEmployee } from "@/helpers/employee";

const page = async ({ params }: { params: { id: string } }) => {
  const employee = await fetchEmployee(params.id);

  return <div>{JSON.stringify(employee)}</div>;
};

export default page;
