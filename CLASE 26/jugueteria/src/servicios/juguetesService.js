import {JugueteDB} from "../persistencia/juguetes.js"

const jugueteDB = new JugueteDB();
class JugueteService{
    static getJuguetes = () =>{
        const juguete = jugueteDB.get();
        return juguete;
    }
    static saveJuguetes = (juguete) =>{
        const result  = jugueteDB.save(juguete);
        return result;
    }
}

export {JugueteService};