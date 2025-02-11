import { Router } from "express";
import { check } from "express-validator";
import { saveAppt } from "./appt.controller.js";
import { validarCampos } from "../middlewares/validar-campos.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

router.post(
    "/",
    [
        validarJWT,
        check('id','No es un id valido').isMongoId(),
        validarCampos
    ],
    saveAppt
)

export default router;