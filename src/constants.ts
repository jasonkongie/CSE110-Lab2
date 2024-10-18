import { Label, Note, GroceryItem } from './types';

export const dummyNotesList: Note[] = [
  {
    id: 1,
    title: 'Sample Note 1',
    content: 'Content for note 1',
    label: Label.other,
  },
  {
    id: 2,
    title: 'Sample Note 2',
    content: 'Content for note 2',
    label: Label.personal,
  },
  {
    id: 3,
    title: 'Sample Note 3',
    content: 'Content for note 3',
    label: Label.work,
  },
  {
    id: 4,
    title: 'Sample Note 4',
    content: 'Content for note 4',
    label: Label.study,
  },
];

// src/constants.ts

export const dummyGroceryList: GroceryItem[] = [
  { name: "Apples", isPurchased: false },
  { name: "Bananas", isPurchased: false },
];