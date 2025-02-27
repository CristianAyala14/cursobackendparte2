// hay q configurar bien la ruta en caso de lo q se espera. Por ej si tuvieras q recibir una palabra, esa palabra no puede ser un numero, o viseversa

const router = Router();
//la expresion regular [a-zA-Z]+ significa que solo podra reconcoer valores alfabeticos. WORD es el parametro en comun.
router.get("/:word([a-zA-Z]+)", async(req,res)=>{
    res.send(req.params.word);
})
//OBTENER EL PARAMETRO / BUSCAR EL PARAMETRO EN LA BASE DE DATOS PARA VALIDAR Q SE ENCUENTRE / UNA VES VALIDADDO CONTINUEAR CON LA OPERACION QUE QUERESMOS. PARA ACCDEDER A EL: router.param

router.param("nombre del parametro", async(req,res,next, valordelparametro))
router.param("word", async(req,res,next,word)=>{
    asdasd
})

//simulacion de uso de router.param para encontrar una palabra
router.param("word", async(req,res,next,word)=>{
    let searchword= await dictionaryService.findWord(word);
    if(!searchword){
        req.word = null;
    }else{
        req.word= searchWord;
    }
})



//hay mas extrategias parala cuestion de esperar caracteres extraños. las tendre q investigar . estan en la clase 23 igual-
//pero q hacer con las q no coinciden con ningun endpoint? bueno, lo siguiente pa:
router.get("*", async(req,res)=>{
    res.status(404).send( "respuesta de q no se puede ")
})


//ondar mas en la customizacion den rutas.