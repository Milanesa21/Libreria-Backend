import { Router } from "express";
import { getLibrosCtrl, getLibroByIdCtrl, createLibroCtrl, updateLibroCtrl, deleteLibroCtrl, getLibroByISBNCtrl, getLibroByAnyWordCtrl, getLibroByTituloCtrl, getLibroByGeneroCtrl } from "../controllers/libro.controller.js";
import { libroSchema } from "../validations/index.js";
import { validate } from "../middlewares/validation.js";

const router = Router();

router.get("/", getLibrosCtrl);
router.get("/:id", getLibroByIdCtrl);
router.get("/isbn/:isbn", getLibroByISBNCtrl);
router.get('/search/:anyword', getLibroByAnyWordCtrl);
router.get('/titulo/:titulo', getLibroByTituloCtrl);
router.get('/genero/:genero', getLibroByGeneroCtrl);
router.post("/", libroSchema, validate, createLibroCtrl);
router.put("/:id", libroSchema, validate,  updateLibroCtrl);
router.delete("/:id", deleteLibroCtrl);

export { router as libroRoutes };