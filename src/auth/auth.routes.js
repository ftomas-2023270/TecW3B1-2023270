import { Router } from "express";
import { check } from "express-validator";
import { login,register } from "./auth.controller.js";
import { validarCampos } from "../middlewares/validar-campos.js";
import { existenteEmail, esRoleValido } from "../helpers/db-validator.js";

const router = new Router();

router.post(
    '/login',
    [
        check('correo','Este correo no es valido').isEmail(),
        check('password','El password es obligatorio').not().isEmpty(),
        validarCampos
    ],
    login
);

router.post('/register',
    [
        check('nombre','El nombre es obligatorio').not().isEmpty(),
        check('password','La contrasena debe tener mas de 6 caracteres').isLength({min:6}),
        check('correo','No es un correo valido').isEmail(),
        check('correo').custom(existenteEmail),
        check('role').custom(esRoleValido),
        check('telefono','El telefono debe contener 8 numeros').isLength({min:8, max:8}),
        validarCampos
    ],
    register
)

export default router