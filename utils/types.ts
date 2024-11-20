type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  location:{
    street: string;
    city: string;
    state: string;
    country: string;
  },
  password: string;
  role: string;
}
enum ROLE {
  ADMIN = "ADMIN",
  USER = "USER"
}
export type {User}
export {ROLE}
