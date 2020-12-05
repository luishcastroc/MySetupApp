import { ILogin } from '../_models';

export class Login {
  static readonly type = '[Auth] Login';
  constructor(public payload: ILogin) {}
}

export class Logout {
  static readonly type = '[Auth] Logout';
}
