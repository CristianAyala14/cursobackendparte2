import { ConectionDB } from "./sevice/conectionDB.js";

const primerInstancia = ConectionDB.getInstance();
const segundaInstancia = ConectionDB.getInstance();
const tercerInstancia = ConectionDB.getInstance();