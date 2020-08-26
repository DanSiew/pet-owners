import { PetModel } from './pet.model';

export interface GenderModel {
  gender: string;
  pets: PetModel[];
}
