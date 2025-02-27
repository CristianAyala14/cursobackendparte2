function getUsers(){
    fetch("http://localhost:8080/api/user").then((response)=>{
        return response.json()
    }).then((dataJson)=>{
        console.log(dataJson)
    })
}

function AddUsers(){
    fetch("http://localhost:8080/api/user",{
        headers:{
            "Content-type":"application/json"
        },
        method: "post",
        body: JSON.stringify({
            name: "lucas",
            email: "lucas@hotmail.com"
        })
    }).then((response)=>{
        return response.json()
    }).then((dataJson)=>{
        console.log(dataJson)
    })
}