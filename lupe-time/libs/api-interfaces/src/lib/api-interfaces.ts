export interface Message {
  message: string;
}

// interface version
// export interface User {
//   firstName: string,
//   lastName: string,
//   email: string,
//   phoneNumber: number,
//   id: number;
// }

// class version
export class User {
  constructor(public firstName: string, public lastName: string, public email: string, public phoneNumber: number, public id: number) {};
}