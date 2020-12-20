import { ISetup } from './setup.model';

export interface IMemberDto {
  id: number;
  userName: string;
  name: string;
  photoUrl: string;
  age: number;
  occupation: string;
  created: Date;
  lastActive: Date;
  gender: string;
  aboutMe: string;
  city: string;
  country: string;
  setups: ISetup[];
}
