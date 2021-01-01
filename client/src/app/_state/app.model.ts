import { IMemberDto } from '@models/member.model';
import { ISetupDto } from '@models/setup.model';
import { IUserLogin } from '@models/user-login.model';

export interface IAppState {
  user?: IUserLogin;
  members?: IMemberDto[];
  setups?: ISetupDto[];
  selectedUser: number;
  member?: IMemberDto;
}
