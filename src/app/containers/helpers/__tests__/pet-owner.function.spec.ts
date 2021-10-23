import { PetModel, GenderModel } from 'src/app/core/models';
import { sortByPet, mapOwnerPets, mapGenderPets } from '../pet-owner.function';

describe('Pet owners helper', () => {
  describe('sortByPet', () => {
    const pets: PetModel[] = [
      { name: 'Tom', type: 'Cat' },
      { name: 'Max', type: 'Cat' },
      { name: 'Sam', type: 'Dog' },
      { name: 'Jim', type: 'Cat' },
    ];

    const sortedPets: PetModel[] = [
      { name: 'Jim', type: 'Cat' },
      { name: 'Max', type: 'Cat' },
      { name: 'Sam', type: 'Dog' },
      { name: 'Tom', type: 'Cat' },
    ];

    it('should sort pets correct', () => {
      const petsSorted: PetModel[] = sortByPet(pets);
      expect(petsSorted).toEqual(sortedPets);
    });
  });

  describe('mapOwnerPets', () => {
    const sortedPets: PetModel[] = [
      { name: 'Garfield', type: 'Cat' },
      { name: 'Jim', type: 'Cat' },
      { name: 'Max', type: 'Cat' },
      { name: 'Tom', type: 'Cat' },
    ];
    const data = [
      {
        id: 1,
        name: 'Bob',
        gender: 'Male',
        age: 23,
        pets: [
          { name: 'Garfield', type: 'Cat' },
          { name: 'Fido', type: 'Dog' },
        ],
      },
      {
        id: 2,
        name: 'Jennifer',
        gender: 'Female',
        age: 18,
        pets: [{ name: 'Garfield', type: 'Cat' }],
      },
      { id: 3, name: 'Steve', gender: 'Male', age: 45, pets: null },
      {
        id: 4,
        name: 'Fred',
        gender: 'Male',
        age: 40,
        pets: [
          { name: 'Tom', type: 'Cat' },
          { name: 'Max', type: 'Cat' },
          { name: 'Sam', type: 'Dog' },
          { name: 'Jim', type: 'Cat' },
        ],
      },
    ];

    it('should map owner pets correctly', () => {
      const gender = 'Male';
      const petsSorted: PetModel[] = mapOwnerPets(gender, data);
      expect(petsSorted).toEqual(sortedPets);
    });
  });

  describe('mapGenderPets', () => {
    const expectGenderPets: GenderModel[] = [
      {
        gender: 'Male',
        pets: [
          { name: 'Garfield', type: 'Cat' },
          { name: 'Jim', type: 'Cat' },
          { name: 'Max', type: 'Cat' },
          { name: 'Tom', type: 'Cat' },
        ],
      },
      {
        gender: 'Female',
        pets: [{ name: 'Garfield', type: 'Cat' }],
      },
    ];
    const data = [
      {
        id: 1,
        name: 'Bob',
        gender: 'Male',
        age: 23,
        pets: [
          { name: 'Garfield', type: 'Cat' },
          { name: 'Fido', type: 'Dog' },
        ],
      },
      {
        id: 2,
        name: 'Jennifer',
        gender: 'Female',
        age: 18,
        pets: [{ name: 'Garfield', type: 'Cat' }],
      },
      { id: 3, name: 'Steve', gender: 'Male', age: 45, pets: null },
      {
        id: 4,
        name: 'Fred',
        gender: 'Male',
        age: 40,
        pets: [
          { name: 'Tom', type: 'Cat' },
          { name: 'Max', type: 'Cat' },
          { name: 'Sam', type: 'Dog' },
          { name: 'Jim', type: 'Cat' },
        ],
      },
    ];

    it('should map gender pets correct', () => {
      const genderPets: GenderModel[] = mapGenderPets(data);
      expect(genderPets).toEqual(expectGenderPets);
    });
  });
});
