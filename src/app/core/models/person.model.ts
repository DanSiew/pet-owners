import { PetModel } from './pet.model';

export interface PersonModel {
  id?: number;
  name: string;
  gender: string;
  age: number;
  pets: PetModel[];
}


