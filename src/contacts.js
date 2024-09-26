const fs = require("fs");
const path = require("path");
const nanoid = require("nanoid");

const contactsPath = path.join(__dirname, "db", "contacts.json");

function listContacts() {
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    if (err) {
      console.error("Eroare la cititrea fisierului");
      return;
    }
    const parsedObject = JSON.parse(data);
    console.table(parsedObject);
  });
}

function getContactById(contactId) {
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    if (err) {
      console.error("Eroare la cititrea fisierului");
    }
    const parsedObject = JSON.parse(data);
    const filteredData = parsedObject.filter((item) => item.id === contactId);
    console.table(filteredData);
  });
}

function removeContact(contactId) {
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    if (err) {
      console.error("Eroare la cititrea fisierului");
    }
    const parsedObjects = JSON.parse(data);
    const index = parsedObjects.findIndex((item) => item.id === contactId);
    if (index !== -1) {
      parsedObjects.splice(index, 1);

      fs.writeFile(contactsPath, JSON.stringify(parsedObjects), (writeErr) => {
        if (err) {
          console.error("Eroare la scrierea fisierului");
          return;
        }
        console.log("Utilizatorul a fost sters cu succes!");
        console.table(parsedObjects);
      });
    } else {
      console.log("Utilizatorul nu a fost gasit!");
    }
  });
}

function addContact(name, email, phone) {
  // ...codul tău
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
