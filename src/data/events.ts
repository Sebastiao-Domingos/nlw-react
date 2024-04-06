import { faker } from "@faker-js/faker";

export type Event = {
  id: number;
  name: string;
  coutch: string;
  createdAt: Date;
  finishedAt: Date;
};

export const events: Event[] = Array.from({ length: 200 }).map(() => {
  return {
    id: faker.number.int({ min: 10000, max: 20000 }),
    name: faker.commerce.productName(),
    coutch: faker.person.fullName(),
    createdAt: faker.date.recent({ days: 300 }),
    finishedAt: faker.date.future({ years: 0.4 }),
  };
});
