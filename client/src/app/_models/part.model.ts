import { IPhotoDto } from './photo.model';

export interface IPartDto {
  id: number;
  name: string;
  description: string;
  buyUrl: string;
  category: string;
  photoUrl: string;
  photos: IPhotoDto[];
}
