import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    const files = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const contacts = JSON.parse(files);
    const contactCount = contacts.length;
    console.log('Кількість контактів:', contactCount);
    return contactCount;
  } catch (error) {
    console.error('Помилка читання контактів:', error);
    return [];
  }
};

console.log(await countContacts());
