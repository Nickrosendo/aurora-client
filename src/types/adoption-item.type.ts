import { AgeType, User, SexType } from '@root/types';

export interface IAdoptionItem {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  tags?: string[];
  sex: SexType;
  age?: string;
  ageType?: AgeType;
  location: string;
  owner: User;
  pretenders: number;
}
