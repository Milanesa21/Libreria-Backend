import { getLibros, getLibroById, createLibro, updateLibro, deleteLibro, getLibroByISBN, getLibroByAnyWord, getLibroByTitulo, getLibroByGenero } from "../models/Libros.js";

export const getLibrosCtrl = async (_req, res) => {

    try {
        const libros = await getLibros();
        res.status(200).json(libros);
    }   catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
}

export const getLibroByIdCtrl = async (req, res) => {
    try {
        const libro = await getLibroById(req.params.id);
        res.status(200).json(libro);
    }   catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
}

export const createLibroCtrl = async (req, res) => {
    const { portada } = req.files; 
    // Subir la portada
    try {     
        const libro = { ...req.body, portada: portada };
        const newLibro = await createLibro(libro);
        res.status(201).json(newLibro);
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
}

export const updateLibroCtrl = async (req, res) => {
    try {
        const libro = await updateLibro(req.params.id, req.body);
        res.status(200).json(libro);
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
}

export const deleteLibroCtrl = async (req, res) => {
    try {
        const libro = await deleteLibro(req.params.id);
        res.status(200).json(libro);
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
}

export const getLibroByISBNCtrl = async (req, res) => {
    try {
        const libro = await getLibroByISBN(req.params.isbn);
        res.status(200).json(libro);
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
}

export const getLibroByAnyWordCtrl = async (req, res) => {
    try {
        const libros = await getLibroByAnyWord(req.params.anyword);
        res.status(200).json(libros);
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
}

export const getLibroByTituloCtrl = async(req, res) => {
    try {

        const libro = await getLibroByTitulo(req.params.titulo);
        res.status(200).json({libro});
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
}

export const getLibroByGeneroCtrl = async (req, res) => {
    try {
        const libros = await getLibroByGenero(req.params.genero);
        res.status(200).json(libros);
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
}