import { CreateContactDto, GetContactDto } from "../dao/dto/contactDto.js";

export class ContactsRepository{
    constructor(dao){
        this.dao = dao
    }
    async getContacts(){
        const contacts = await this.dao.get();
        return contacts;
    }
    async createContact(contact){
        const contactDto = new CreateContactDto(contact)
        const contactCreated = await this.dao.post(contactDto)
        const contactDtoFront = new GetContactDto(contactCreated)
        return contactDtoFront;
    }
}