import { checkSchema } from "express-validator";

export const libroSchema = checkSchema({
    titulo:{
        in: ["body"],
        notEmpty: true
    },
    editorial:{
        in: ["body"],
        notEmpty: true
    },
    isbn: {
        in: ["body"],
        notEmpty: true,
    },
    autor: {
        in: ["body"],
        notEmpty: true
    },
    fechaPublicacion: {
        in: ["body"],
        notEmpty: true
    },
    genero:{
        in: ["body"],
        notEmpty: true
    }
});