import { IUserLogin } from '../_models';
import { IMemberDto } from '../_models/member.model';

export interface IAppState {
  user: IUserLogin;
  members: IMemberDto[] | [];
}
