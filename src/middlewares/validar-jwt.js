import jwt from 'jsonwebtoken';

import Usuario from '../user/user.model.js';

export const validarJWT = async(req, res, next) =>{

    const token = req.header("x-token");

    if(!token){
        return res.status(401).json({
            msg: "No hay token en la peticion"
        })
    }

    try {
        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

        const usuario = await Usuario.findById(uid);

        console.log("BP2")

        if(!usuario){
            return res.status(401).json({
                msg: 'Usuario no existe en la base de datos'
            })
        }

        if(!usuario.estado){
            return res.status(401).json({
                msg:'Token no valido - usuarios con estado : false'
            })
        }

        req.usuario = usuario;
        console.log("BP3")

        next();
    } catch (e) {
        console.log(e);
        res.status(401).json({
            msg: "Token no valido"
        })
    }
}