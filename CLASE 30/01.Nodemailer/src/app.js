import express from "express";
import {options} from "./config/option.js";
import {transporter} from "./config/gmail.js"
import ___dirname from "./..."
import path from "path";
const port = options.server.PORT|| 8080;
const app = express();
app.use(express.json());


app.listen(port, ()=>console.log(`Servidor funcionando en el puerto ${port}`))


const emailTemplate = `
  <div>
    <h2>¡Hola !</h2>
    <p>Gracias por registrarte en nuestra aplicación.</p>
    <p>Esperamos que disfrutes la experiencia.</p>
    <br>
    <p>Saludos,<br>El equipo de TuApp</p>
    <img src="cid:perrito1"/> 
  </div>
`;


app.post("/registro", async (req,res)=>{
  try {
    const contenido = await transporter.sendMail({
      from: "Ecommerce coderCommer",
      to: "cristianpabloayala@hotmail.com",
      subject: "Registro exitoso",
      html: emailTemplate,
      attachments:[{
        filename: "perrito1.jpg",
        path: path.join(___dirname,"/images/perrito1.jpg"),
        cid: "perrito1" //el cid es el q va como si fuera un id en la imagen en html donde esta el cuerpo del mail para q reconosca el archivo el html.
      },
      {
        filename: "ver.pdf",
        path: path.join(___dirname,"/images/ver.pdf"),
       //no va cid por q no es una imagen
      }
    
    
    ]
    })
    console.log("Contenido",contenido)
    res.json({
      status:"success",
      message: "enviado correctamente"
    })
  } catch (error) {
    console.log(error)
    res.json({
      status:"error",
      message: "hubo un error al tratar de registrarse"
    })
  }
})

