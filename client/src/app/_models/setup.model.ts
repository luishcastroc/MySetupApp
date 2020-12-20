import { IPartDto } from './part.model';
import { IPhotoDto } from './photo.model';

export interface ISetupDto {
  id: number;
  title: string;
  description: string;
  isMain: boolean;
  photoUrl: string;
  photos: IPhotoDto[];
  parts: IPartDto[];
}
