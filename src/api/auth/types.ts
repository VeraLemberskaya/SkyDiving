export const enum Role {
  ADMIN = 'ADMIN',
  REFEREE = 'REFEREE',
  SKYDIVER = 'SKYDIVER',
  SECRETARY = 'SECRETARY',
}

export interface Credentials {
  login: string;
  password: string;
}

export interface SignInResponse {
  userId: number;
  userRole: Role;
  accessToken: string;
}

export interface UserInfo {
  id: number;
  firstName: string;
  secondName: string;
  patronymic: string;
  role: Role;
}
