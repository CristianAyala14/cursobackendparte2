class JugueteDB{
    constructor(){
        this.juguetes = []
    }
    get(){
        return this.juguetes;
    }
    save(juguete){
        this.juguetes.push(juguete)
        return "Usuario guardado";

    }

}

export {JugueteDB};