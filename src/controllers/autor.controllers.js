import { createAutor, geAutores, updateAutor, deleteAutor, getAutorById } from "../models/Autores.js";

export const getAutoresCtrl = async ( req, res) => {
    try {
        const autores = await geAutores();
        res.status(200).json(autores);
    }   catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
}

export const getAutorByIdCtrl = async (req, res) => {
    try {
        const autor = await getAutorById(req.params.id);
        res.status(200).json(autor);
    }   catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
}

export const  createAutorCtrl = async (req, res) => {
    try {
        const autor = await createAutor(req.body);
        res.status(201).json(autor);
    }   catch (error) {
        console.log(error);
        res.status(500).json(error.message) ;
    }
}

export const updateAutorCtrl = async (req, res) => {
    try {
        const autor = await updateAutor(req.params.id, req.body);
        res.status(200).json({msg: 'Autor actualizado'});
    }   catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
}

export const deleteAutorCtrl = async (req, res) => {
    try {
        const autor = await deleteAutor(req.params.id);
        res.status(200).json({msg: 'Autor eliminado'});
    }   catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
}