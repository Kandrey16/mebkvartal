export interface IApiRequestData {
  accessToken: string,
  refreshToken: string,
  user: IApiUser
}

export interface IApiUser {
  id: string,
  email: string,
  role: string
  isActivated: boolean
}