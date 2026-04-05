export interface IUser {
  id: string
  email: string
  password: string
  role: string
  activationLink?: string
  name?: string
  surname?: string
  imageUrl?: string
  phoneNumber?: string
}