// src/controllers/usercontroller.js
const createUser = (userData)=>{
    if (!userData.name || !userData.email) {
        throw new Error('Nombre y email con requeridos');
    }
    return {id: 1, ...userData};
};
module.Export = {createUser};