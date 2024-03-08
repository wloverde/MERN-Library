import mongoose from "mongoose";

const tomeSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        magicType: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Tome = mongoose.model('Tome', tomeSchema);
