process.on("exit", (code)=>{
    if(code ===-4){
        return console.log("Proceso finalizado por argumentacion invalida")
    }else{
        console.log("La aplicacion finalizo correctamente")
    }
})

const listNumbers = (...numbers) =>{
    let error = " ";
    numbers.forEach((item)=>{
        //vamos a validar que el tipo de dato que vamos a recibir no sea numerico.
        if(isNaN(parseInt(item))){
            error = "invalid parameters"
        }
    });
    console.log({
        error, 
        data: numbers.map(i=>typeof i)
    })
    if(error){
        process.exit(-4)
    }
}

listNumbers(1,2,3)