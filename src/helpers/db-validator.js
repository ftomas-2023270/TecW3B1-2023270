import RoleSchema from "../role/role.model.js";

import UserModel from "../user/user.model.js";

export const esRoleValido = async(role = '')=>{
    const existeRol = await RoleSchema.findOne({role});

    if(!existeRol){
        throw new Error(`El rol ${role} no existe en la base de datos`);
    }
}

export const existenteEmail = async(correo ='')=>{

    const existeEmail = await UserModel.findOne({correo});

    if(existeEmail){
        throw new Error(`El correo ${correo} ya esta registrado`)
    }
}