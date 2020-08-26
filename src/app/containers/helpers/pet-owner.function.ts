import { GenderModel, PersonModel, PetModel } from 'src/app/core/models';

export function mapGenderPets(data: PersonModel[]): GenderModel[] {
  const genderPets: GenderModel[] = [];
  const maleGender = 'Male';
  genderPets.push({
    gender: maleGender,
    pets: mapOwnerPets(maleGender, data),
  });
  const femaleGender = 'Female';
  genderPets.push({
    gender: femaleGender,
    pets: mapOwnerPets(femaleGender, data),
  });
  return genderPets;
}

export function mapOwnerPets(gender: string, data: PersonModel[]): PetModel[] {
  const persons = data.filter((p) => p.gender === gender);
  let pets = [];
  persons.forEach((p) => {
    pets = p.pets ? pets.concat(p.pets) : pets;
  });
  pets = pets.filter((p: PetModel) => p.type === 'Cat');
  return sortByPet(pets);
}

export function sortByPet(pets: PetModel[]): PetModel[] {
  return pets.sort((a, b) =>
    a.name.localeCompare(b.name, 'en', { sensitivity: 'base' })
  );
}
