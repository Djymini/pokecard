import {UserModel} from './user-model';

export type AuthResponse = {
  id: number,
  name: string,
  username: string,
  email: string,
  token: string;
}
