import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

export const putDb = async (content) => {
  console.log('PUT to the database');
  const textDb = await openDB('jate', 1); // opens database
  const tx = textDb.transaction('jate', 'readwrite'); // creates transaction and determines property-can edit
  const store = tx.objectStore('jate'); // receives the object in 'jate'
  const request = store.put({ id: 1, text: content }); // updates object
  const result = await request; // gets output
  console.log('🚀 - data saved to the database', result);
};

export const getDb = async () => {
  console.log('GET all from the database');
  const textDb = await openDB('jate', 1);
  const tx = textDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.getAll(); // gets all data in database
  const result = await request;
  console.log('result.value', result);
  return result;
};

initdb();
