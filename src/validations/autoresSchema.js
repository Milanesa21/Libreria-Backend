import { checkSchema } from "express-validator";

export const autorSchema = checkSchema({
    nombres: {
        in: ["body"],
        notEmpty: true,
        isString: true,
    },
    apellidos: {
        in: ["body"],
        notEmpty: true,
        isString: true,
    },
    fechaNacimiento: {
        in: ["body"],
        notEmpty: true,
        isISO8601: true,
    },
    fechaMuerte: {
        in: ["body"],
        optional: true,
        isISO8601: true,
    },
    biografia: {
        in: ["body"],
        optional: true,
        isString: true,
    },
    libros: {
        in: ["body"],
        optional: true,
        isArray: true,
    },
});
