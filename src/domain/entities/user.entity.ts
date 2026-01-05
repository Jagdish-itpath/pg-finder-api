import { UserRoles } from "src/common/enums/user-roles.enum";

export class User {
  constructor(
    public readonly id: string,
    public email: string,
    public name: string,
    public password?: string,
    public role: UserRoles = UserRoles.TENANT,
  ) {}

//   changeEmail(newEmail: string) {
//     if (!newEmail.includes("@")) {
//       throw new Error("Invalid email");
//     }
//     this.email = newEmail;
//   }
}
