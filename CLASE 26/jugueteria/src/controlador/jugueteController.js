import { JugueteService } from "../servicios/juguetesService.js"

class JugueteController{
    static getJuguetes = (req,res)=>{
        const juguetes = JugueteService.getJuguetes();
        res.json({status: "success", data: juguetes})
    }

    static saveJuguetes = (req,res)=>{
        const {name,code} = req.body;
        const newJuguete = {
            name,code
        }
        const result = JugueteService.saveJuguetes(newJuguete)
        res.json({status: "success", message: result})
    }
}

export {JugueteController}