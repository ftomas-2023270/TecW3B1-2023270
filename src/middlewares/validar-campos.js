import { validationResult } from "express-validator";

export const validarCampos = (req, res, next)=>{

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        console.log("BP4")

        return next(errors);        
    }
    next();
}