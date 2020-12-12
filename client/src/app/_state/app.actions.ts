import { ILogin } from '../_models';
import { IUserRegisterDto } from '../_models/register.model';

export class Login {
  static readonly type = '[Auth] Login';
  constructor(public payload: ILogin) {}
}

export class Logout {
  static readonly type = '[Auth] Logout';
}

export class Register {
  static readonly type = '[User] Register';
  constructor(public payload: IUserRegisterDto) {}
}
