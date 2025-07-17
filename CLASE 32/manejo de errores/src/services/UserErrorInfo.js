export const generateUserErrorInfo = (user)=>{
  return `algunos campos obligatorios para crear usuario vinieron vacios:
  first_name: llego ${user.first_name}
  last_name: llego ${user.last_name}
  email: tiene que ser string, pero llego: ${user.email}`
}