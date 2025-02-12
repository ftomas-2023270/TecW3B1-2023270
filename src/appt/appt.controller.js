import Appt from "./appt.model.js";
import Pet from "../pet/pet.model.js";

export const saveAppt = async (req, res) => {
    try {
        const data = req.body;

        const pet = await Pet.findOne({_id: data.id});

        if(!pet){
            return res.status(404).json({
                success: false,
                message: 'Mascota no encontrada'
            })
        }

        const appt = new Appt({
            ...data,
            pet: pet._id
        });

        await appt.save();

        res.status(200).json({
            success: true,
            appt
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al agendar la cita",
            error
        })
    }
}

