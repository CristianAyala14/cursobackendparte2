import express from "express";
import compression from "express-compression";
const PORT = 8080;
const app = express();
app.listen(PORT, ()=>"Servidor funcionando en el puerto 8080")


//para toda la app seria
// app.use(compression());

//sobre un endpoint en especifico
app.get("/endpoint-normal",(req,res)=>{
  let string = "Hola coder, soy una cadena muy larga."
  for(let i = 0 ; i < 5e4; i++){
    string += "Hola Coder, soy una cadena muy larga."
  }
  res.send(string)
})

app.get("/endpoint-compression-gzip", compression(), (req,res)=>{
  let string = "Hola coder, soy una cadena muy larga."
  for(let i = 0 ; i < 5e4; i++){
    string += "Hola Coder, soy una cadena muy larga."
  }
  res.send(string)
})