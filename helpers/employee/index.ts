import { faker } from "@/lib/faker";
import { IEmployee } from "@/helpers/employee/interface";

export function createRandomEmployee(): IEmployee {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    jobTitle: faker.person.jobTitle(),
    avatar: faker.image.urlLoremFlickr({ category: "people" }),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
    votes: faker.number.int({ min: 0, max: 30 }),
  };
}
