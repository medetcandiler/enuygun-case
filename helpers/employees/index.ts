import { faker } from '../../lib/faker'
import { IEmployees } from "./interface";
import { createRandomEmployee } from "../employee";
import { EMPLOYEES_COUNTER } from '@/constants';

export const createRandomEmployees = (): IEmployees => faker.helpers.multiple(createRandomEmployee, {
  count: EMPLOYEES_COUNTER,
})
