import * as jsonfile from "jsonfile";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = [];
  load() {
    // usar la version Async (readFile)
    // const json = jsonfile.readFileSync("./contacts.json");
    // this.data = json;

    const jsonPromLoad = jsonfile.readFile(__dirname + "/contacts.json");
    jsonPromLoad.then((obj) => {console.log(obj);this.data = obj;});
    jsonPromLoad.catch((error) => {throw error;});

    return jsonPromLoad;
  }
  getAll() {
    return this.data;
  }
  addOne(contact: Contact) {
    this.data.push(contact);
  }
  save() {
    // usar la version Async (writeFIle)
    jsonfile.writeFileSync("./contacts.json", this.data);

    const jsonPromRead = jsonfile.writeFile("./contacts.json", this.data);
    jsonPromRead.catch((err) => {throw err;});

    return jsonPromRead;
  }
  getOneById(id) {
    const encontrado = this.data.find((contacto) => {
      if (contacto.id == id) {
        return true;
      }
    });

    return encontrado;
  }
}
export { ContactsCollection, Contact };
