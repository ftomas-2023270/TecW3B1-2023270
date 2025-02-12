import { Router } from "express";
import { check } from "express-validator";
import { deletePet, getPets, savePet, searchPet, updatePet } from "./pet.controller.js";
import {validarCampos} from "../middlewares/validar-campos.js";
import {validarJWT} from "../middlewares/validar-jwt.js";

const router = Router();

router.post(
    "/",
    [
        validarJWT,
        check('email','Este no es un correo valido').not().isEmpty(),
        validarCampos
    ],
    savePet
)

router.put(
    "/:id",
    [
        validarJWT,
        check("id","No es un id válido").isMongoId(),
        check('email','Este no es un correo valido').optional(),
        validarCampos
    ],
    updatePet
)

router.get("/", getPets)

router.get(
    "/:id",
    [
        validarJWT,
        check("id","No es un id válido").isMongoId(),
        validarCampos
    ],
    searchPet
)

router.delete(
    "/:id",
    [
        validarJWT,
        check("id","No es un id válido").isMongoId(),
        validarCampos
    ],
    deletePet
)

export default router;