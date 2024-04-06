// ESM
import { faker } from "@faker-js/faker";

export type User = {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
  checkedInAt: Date;
};

export const attendees: User[] = Array.from({ length: 200 }).map(() => {
  return {
    id: faker.number.int({ min: 10000, max: 20000 }),
    name: faker.person.fullName(),
    email: faker.internet.email().toLowerCase(),
    password: faker.internet.password(),
    createdAt: faker.date.recent({ days: 30 }),
    checkedInAt: faker.date.recent({ days: 7 }),
  };
});
