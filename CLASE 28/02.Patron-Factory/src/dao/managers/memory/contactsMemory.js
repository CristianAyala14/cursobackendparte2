import { v4 as uuidv4} from "uuid";
export class ContactsMemory{
    constructor(){
        this.contacts = [{
            id:"asdadadsad",
            name: "Pepe",
            phone: "+54 3329 56565656",
            email: "pepe@hotmail.com"
        }]
    }

    get(){
        return this.contacts;
    }

    post(contact){
        contact.id = uuidv4();
        this.contacts.push(contact)
        return contact
    }

    async getById(id){
        const contact = this.contacts.find(el=>el.id === id);
        if(!contact){
            throw new Error("Error no se encontro el usuario.") //homologacion: que los managers que haga de distintos origenes (memory, mongo) tengan misma respuesta de errores, y mismo nombres de metodos. Esto para que si se necesita cambiar la persistencia se haga por managers. y que no se vea afectada la capa de negocio (controladores y rutas)
        }
        return contact
    }
}