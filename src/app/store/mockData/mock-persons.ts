import { PersonModel } from 'src/app/core/models/person.model';

export const mockPersonResult: PersonModel[] = [
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
  {
    id: 5,
    name: 'Samantha',
    gender: 'Female',
    age: 40,
    pets: [{ name: 'Tabby', type: 'Cat' }],
  },
  {
    id: 6,
    name: 'Alice',
    gender: 'Female',
    age: 64,
    pets: [
      { name: 'Simba', type: 'Cat' },
      { name: 'Nemo', type: 'Fish' },
    ],
  },
];
