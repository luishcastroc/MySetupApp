import { IPart } from './part.model';
import { IPhoto } from './photo.model';

export interface ISetup {
  id: number;
  title: string;
  description: string;
  isMain: boolean;
  photoUrl: string;
  photos: IPhoto[];
  parts: IPart[];
}
