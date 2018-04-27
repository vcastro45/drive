export default class User {
  username?: string
  email?: string
}

export class UserWithPasswd extends User {
  password?: string
}
