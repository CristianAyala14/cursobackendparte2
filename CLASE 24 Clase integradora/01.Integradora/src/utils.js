import {fileURLToPath} from "url";
import {dirname} from "path";
import bcrypt from "bcrypt";


//DIRNAME
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export {__dirname};


//BCRYPT: 
//encriptacion
export const createHash = async(password)=>{
    const salts = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salts);
}
//validation of bcrypt
export const isValidPassword = async (user, password)=>{bcrypt.compare(password,user.password)}



