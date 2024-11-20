import { ROLE, User } from "./types";

export const users: User[] = [
  {
    id: 1,
    firstName: "Alice",
    lastName: "Johnson",
    email: "alice.johnson@example.com",
    location: {
      street: "123 Maple St",
      city: "Springfield",
      state: "Illinois",
      country: "USA",
    },
    password: "p@ssw0rd1",
    role: ROLE.ADMIN,
  },
  {
    id: 2,
    firstName: "Bob",
    lastName: "Smith",
    email: "bob.smith@example.com",
    location: {
      street: "456 Oak St",
      city: "Seattle",
      state: "Washington",
      country: "USA",
    },
    password: "p@ssw0rd2",
    role: ROLE.USER,
  },
  {
    id: 3,
    firstName: "Clara",
    lastName: "Miller",
    email: "clara.miller@example.com",
    location: {
      street: "789 Pine Ave",
      city: "Austin",
      state: "Texas",
      country: "USA",
    },
    password: "p@ssw0rd3",
    role: ROLE.USER,
  },
  {
    id: 4,
    firstName: "David",
    lastName: "Williams",
    email: "david.williams@example.com",
    location: {
      street: "321 Elm Dr",
      city: "Miami",
      state: "Florida",
      country: "USA",
    },
    password: "p@ssw0rd4",
    role: ROLE.ADMIN,
  },
  {
    id: 5,
    firstName: "Emily",
    lastName: "Brown",
    email: "emily.brown@example.com",
    location: {
      street: "654 Cedar Ln",
      city: "Denver",
      state: "Colorado",
      country: "USA",
    },
    password: "p@ssw0rd5",
    role: ROLE.USER,
  },
  {
    id: 6,
    firstName: "Frank",
    lastName: "Taylor",
    email: "frank.taylor@example.com",
    location: {
      street: "987 Spruce St",
      city: "Boston",
      state: "Massachusetts",
      country: "USA",
    },
    password: "p@ssw0rd6",
    role: ROLE.USER,
  },
  {
    id: 7,
    firstName: "Grace",
    lastName: "Anderson",
    email: "grace.anderson@example.com",
    location: {
      street: "432 Birch Rd",
      city: "Los Angeles",
      state: "California",
      country: "USA",
    },
    password: "p@ssw0rd7",
    role: ROLE.ADMIN,
  },
  {
    id: 8,
    firstName: "Henry",
    lastName: "Thomas",
    email: "henry.thomas@example.com",
    location: {
      street: "210 Willow Way",
      city: "Chicago",
      state: "Illinois",
      country: "USA",
    },
    password: "p@ssw0rd8",
    role: ROLE.USER,
  },
  {
    id: 9,
    firstName: "Ivy",
    lastName: "Moore",
    email: "ivy.moore@example.com",
    location: {
      street: "108 Sycamore Pl",
      city: "San Francisco",
      state: "California",
      country: "USA",
    },
    password: "p@ssw0rd9",
    role: ROLE.USER,
  },
  {
    id: 10,
    firstName: "Jack",
    lastName: "Lee",
    email: "jack.lee@example.com",
    location: {
      street: "99 Cherry Ct",
      city: "Houston",
      state: "Texas",
      country: "USA",
    },
    password: "p@ssw0rd10",
    role: ROLE.ADMIN,
  }
  // Add more users as needed
];
