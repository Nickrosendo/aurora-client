export interface User {
  id: string;
  name: string;
  image: string;
  type: UserTypes;
}

export enum UserTypes {
  ORGANIZATION = 1,
  PERSON = 2,
}
