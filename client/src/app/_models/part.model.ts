import { IPhoto } from './photo.model';

export interface IPart {
  id: number;
  name: string;
  description: string;
  buyUrl: string;
  category: string;
  photoUrl: string;
  photos: IPhoto[];
}
