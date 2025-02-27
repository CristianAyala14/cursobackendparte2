import { ContactsRepository } from "./contactsRepository.js";
import {ContactsDao} from "../dao/factory.js";
export const contactService = new ContactsRepository(ContactsDao)