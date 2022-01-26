import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

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

/**
 * Using class notation allows us to add decorators to the properties
 * @ApiProperty swagger decorator to add body to generated documentation
 */
export class User {
  @ApiProperty({ type: String })
  firstName: string;
  @ApiProperty({ type: String })
  lastName: string;
  @ApiProperty({ type: String })
  email: string;
  @ApiProperty({ type: Number })
  phoneNumber: number;
  @ApiPropertyOptional({ type: Number })
  id: number;

  constructor(firstName: string, lastName: string, email: string, phoneNumber: number, id: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.id = id;
  };
}