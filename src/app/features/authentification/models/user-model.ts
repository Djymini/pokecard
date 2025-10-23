export type UserModel = {
  id: number,
  name: string,
  username: string,
  email: string,
}


export const userModelDefaultValue: UserModel = {
  id: 0,
  name: "user",
  username: "user",
  email: "user@user.com"
}
