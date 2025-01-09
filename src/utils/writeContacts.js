import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, undefined, 2), {
      encoding: 'utf-8',
    });
    console.log('Дані успішно записані');
  } catch (err) {
    console.error('Помилка запису у файл', err);
  }
};
