import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  try {
    const files = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const contacts = JSON.parse(files);
    return contacts;
  } catch (error) {
    console.error('Помилка отримання списку контактів', error);
    return [];
  }
};

console.log(await getAllContacts());
