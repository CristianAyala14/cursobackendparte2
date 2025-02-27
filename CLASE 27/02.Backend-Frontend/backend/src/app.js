import express from "express"; 
import cors from "cors";
const PORT = 8080;
const app = express();
app.use(express.json())
app.use(cors({
    origin:"http://"
})); //dentro de cors yo puedo poner que origen aceptamos tambien, por si solo acepta cualquiera, pero si le ponemos por ej REACT, aceptara ese solo.
app.listen(PORT,()=>console.log(`Servidor funcionadno en el ppuerto: ${PORT}`)) 

let users = [
    {
        name: "Pepe",
        email: "meme@hotmail.com"
    }
]

app.get("/api/user",(req,res)=>{
    res.json({status: "success", users})
})

app.post("/api/user",(req,res)=>{
    const newUser = req.body;
    users.push(newUser);
    res.json({status: "success", message: "Usuario agregado"})
    
})