interface User {
  id: string
  name: string
  email: string
  password: string
}

export const createUserFromJson = (json: any): User => {
  return {
    id: json.id,
    name: json.name,
    email: json.email,
    password: json.password,
  }
}

export default User
