//en este ejemplo hacemos como que contact q es la variable que viene del cliente, viene como desordenada, o mas bien de otra manera. y nosotros la parceamos uqe valla como tiene que recibirlo nuestro backend.
//cuando recibo dle front 
export class CreateContactDto{
    constructor(contact){
        this.fullName = `${contact.first_name} ${contact.last_name}`;
        this.name = contact.first_name;
        this.lastName = contact.last_name;
        this.telefono= contact.telefono;
        this.email = contact.email;
        this.password = contact.password;
    }
}
//cuando envio del back
export class GetContactDto{
    constructor(contactDB){
        this.fullName = contactDB.fullName;
        this.telefono = contactDB.telefono;
        this.email = contactDB.email
    }
}

 