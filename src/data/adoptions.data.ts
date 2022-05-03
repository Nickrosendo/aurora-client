import { IAdoptionItem, UserTypes } from '@root/types';
import { objectId } from '@root/helpers';

export const mock_data: Array<IAdoptionItem> = [
  {
    id: objectId(),
    imageUrl:
      'https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'black puppy dog',
    tags: ['puppy', 'docile', 'healthy'],
    sex: 'male',
    age: '32',
    ageType: 'weeks',
    location: 'Sao Paulo, Brazil',
    owner: {
      name: 'Adoption House',
      image:
        'https://cdn2.vectorstock.com/i/thumb-large/75/66/abstract-logo-template-vector-25147566.jpg',
      type: UserTypes.ORGANIZATION,
    },
    pretenders: 8,
  },
  {
    id: objectId(),
    imageUrl:
      'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'red female shiba',
    tags: ['shiba', 'puppy', 'neutered'],
    sex: 'female',
    age: '7',
    ageType: 'months',
    location: 'Curitiba, Brazil',
    owner: {
      name: 'Adoption House',
      image:
        'https://cdn2.vectorstock.com/i/thumb-large/75/66/abstract-logo-template-vector-25147566.jpg',
      type: UserTypes.ORGANIZATION,
    },
    pretenders: 24,
  },
  {
    id: objectId(),
    imageUrl:
      'https://images.pexels.com/photos/235805/pexels-photo-235805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'white big dog',
    tags: ['big', 'healthy', 'neutered'],
    sex: 'male',
    age: '5',
    ageType: 'years',
    location: 'Sao Paulo, Brazil',
    owner: {
      name: 'Adoption House',
      image:
        'https://cdn2.vectorstock.com/i/thumb-large/75/66/abstract-logo-template-vector-25147566.jpg',
      type: UserTypes.ORGANIZATION,
    },
    pretenders: 3,
  },
  {
    id: objectId(),
    imageUrl:
      'https://images.pexels.com/photos/2664417/pexels-photo-2664417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'beautiful puppy corgi',
    tags: ['corgi', 'puppy'],
    sex: 'male',
    age: '3',
    ageType: 'months',
    location: 'Bahia, Brazil',
    owner: {
      name: 'Adoption House',
      image:
        'https://cdn2.vectorstock.com/i/thumb-large/75/66/abstract-logo-template-vector-25147566.jpg',
      type: UserTypes.ORGANIZATION,
    },
    pretenders: 30,
  },
  {
    id: objectId(),
    imageUrl:
      'https://images.pexels.com/photos/9259432/pexels-photo-9259432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'big german sheppard',
    tags: ['german-sheppard', 'big', 'trained'],
    sex: 'female',
    age: '5',
    ageType: 'years',
    location: 'Rio de Janeiro, Brazil',
    owner: {
      name: 'Adoption House',
      image:
        'https://cdn2.vectorstock.com/i/thumb-large/75/66/abstract-logo-template-vector-25147566.jpg',
      type: UserTypes.ORGANIZATION,
    },
    pretenders: 23,
  },
  {
    id: objectId(),
    imageUrl:
      'https://images.pexels.com/photos/6907083/pexels-photo-6907083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'wolf dog',
    tags: ['wolf', 'big', 'trained'],
    sex: 'male',
    age: '3',
    ageType: 'years',
    location: 'Santa Catarina, Brazil',
    owner: {
      name: 'Adoption House',
      image:
        'https://cdn2.vectorstock.com/i/thumb-large/75/66/abstract-logo-template-vector-25147566.jpg',
      type: UserTypes.ORGANIZATION,
    },
    pretenders: 15,
  },
  {
    id: objectId(),
    imageUrl:
      'https://images.pexels.com/photos/1619690/pexels-photo-1619690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'pomeranian lulu puppy',
    tags: ['puppy', 'lulu', 'healthy'],
    sex: 'female',
    age: '3',
    ageType: 'months',
    location: 'Santa Catarina, Brazil',
    owner: {
      name: 'Adoption House',
      image:
        'https://cdn2.vectorstock.com/i/thumb-large/75/66/abstract-logo-template-vector-25147566.jpg',
      type: UserTypes.ORGANIZATION,
    },
    pretenders: 50,
  },
];
