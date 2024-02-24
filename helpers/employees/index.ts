import { faker } from "../../lib/faker";
import { IEmployees } from "./interface";
import { createRandomEmployee } from "../employee";
import { EMPLOYEES_COUNTER, GET_EMPLOYEES_QUERY } from "@/constants";
import { fetcher } from "@/lib/fetcher";
import { sorter } from "@/lib/sorter";

export const createRandomEmployees = (): IEmployees =>
  faker.helpers.multiple(createRandomEmployee, {
    count: EMPLOYEES_COUNTER,
  });

export const fetchEmployees = async () => {
  const res = await fetcher<{ employees: IEmployees }>(
    JSON.stringify({ query: GET_EMPLOYEES_QUERY })
  );
  const { employees } = res;

  return sorter(employees);
};
