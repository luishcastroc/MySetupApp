import { ILogin } from '@models/login.model';
import { IUserRegisterDto } from '@models/register.model';

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

export class GetMembers {
  static readonly type = '[Member] GetMembers';
}

export class GetMember {
  static readonly type = '[User] Register';
  constructor(public payload: string) {}
}

export class GetSetups {
  static readonly type = '[Setup] GetSetups';
}

export class SelectUser {
  static readonly type = '[Setup] SelectUser';
  constructor(public payload: number) {}
}

export class GetMemberById {
  static readonly type = '[User] GetMemberById';
  constructor(public payload: number) {}
}
