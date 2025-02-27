import { options } from "../config/config.js";
const persistence = options.server.persistence;
let contactsDao;
switch(persistence){
    case "mongo":
    const {connectDB} = await import("../config/dbConnection.js");
    connectDB();
    const {ContactsMongo} = await import("./managers/mongo/contactsMongo.js");
    contactsDao = new ContactsMongo();
        break;
    case "memory":
    const {ContactsMemory} = await import("./managers/memory/contactsMemory.js");
    contactsDao = new ContactsMemory();
            break; 
    case "SQL":
            break;  
}

export {contactsDao};