import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const files = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const contacts = JSON.parse(files);
    if (contacts.length === 0) {
      console.log('Відсутні контакти для видалення');
      return;
    }
    contacts.pop();
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), {
      encoding: 'utf-8',
    });
    console.log('Останній контакт був успішно видалений');
  } catch (error) {
    console.error('Помилка у видаленні останнього контакту', error);
  }
};

removeLastContact();
