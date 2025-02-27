export const getUsers = async(req,res)=>{
    try {
        res.send({status:"success",payload:"getUsers"})
    } catch (error) {
        res.send({status:"error", message: error.message})
    }
}
export const getUsersById = async(req,res)=>{
    try {
        res.send({status:"success",payload:"getUserById"})
    } catch (error) {
        res.send({status:"error", message: error.message})
    }
}
export const saveUsers = async(req,res)=>{
    try {
        res.send({status:"success",payload:"saveUsers"})
    } catch (error) {
        res.send({status:"error", message: error.message})
    }
}
