import createFakeContact from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const currentContacts = (await readContacts()) || [];
    const newContacts = Array.from({ length: number }, () =>
      createFakeContact(),
    );
    const updateContacts = [...currentContacts, ...newContacts];
    await writeContacts(updateContacts);
    console.log(`Додано ${number} контактів`);
  } catch (err) {
    console.error('Помилка додавання контактів...', err);
  }
};

generateContacts(5);

export default generateContacts;
