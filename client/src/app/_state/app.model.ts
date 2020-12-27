import { IUserLogin } from '../_models';
import { IMemberDto } from '../_models/member.model';
import { ISetupDto } from '../_models/setup.model';

export interface IAppState {
  user: IUserLogin;
  members: IMemberDto[] | [];
  setups: ISetupDto[] | [];
  selectedUser?: number | null;
}
