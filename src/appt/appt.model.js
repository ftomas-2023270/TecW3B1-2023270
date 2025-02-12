import {Schema, model} from "mongoose";

const ApptSchema = Schema({
    pet:{
        type: Schema.Types.ObjectId,
        ref: 'pet',
        required: true
    },
    description:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    status:{
        type: Boolean,
        default: true
    }
},
{
    timestamps: true,
    versionkey: false
}
);

export default model('Appt',ApptSchema);