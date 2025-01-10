import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([]), { encoding: 'utf-8' });
    console.log('Дані файлу успішно видалено');
  } catch (error) {
    console.error('Помилка видалення даних', error);
  }
};

removeAllContacts();
