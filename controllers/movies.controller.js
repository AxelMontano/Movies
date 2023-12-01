const Movie = require('../models/movie.model');

exports.getMovies = async (req, res) => {
    try{
        const movies = await Movie.find();
        return res.status(200).json({
            message : "Consultar peliculas",
            data: movies
        });
    }catch(error){
        return res.status(500).json({
            message : "Error al consultar peliculas",
            data: error
        });
    }
}

exports.getMoviesbyId = async (req, res) => {
    try{
        const movieId = req.params.movieId;

        const movie = await Movie.findById(movieId);
        return res.status(200).json({
            message : "Consultando peliculas por su ID: " + movieId,
            data : movie
        });
    }catch(error){
        return res.status(500).json({
            message : "Error al consultar pelicula por su ID",
            data: error
        });
    }
}

exports.newMovie = async (req, res) => {
    try{
        const { nombre, director, año, duracion, genero } = req.body;
        const newMovie = new Movie ({ nombre, director, año, duracion, genero });
        await newMovie.save();

        return res.status(200).json({
            message : "Pelicula ha sido creada",
            data : newMovie
        });
    }catch(error){
        return res.status(500).json({
            message : "Error al crear la pelicula",
            data: error
        });
    }
}

exports.updateMovie = async (req, res) => {
    const movieId = req.params.movieId;
    const newData = req.body;
    
    try{
        const updateMovie = await Movie.findByIdAndUpdate(movieId, newData, { new : true });

        return res.status(201).json({
            message : "Actualizar pelicula por su ID: " + movieId,
            data : updateMovie
        });
    }catch(error){
        return res.status(500).json({
            message : "Error al actualizar su pelicula",
            data: error
        });
    }
}

exports.deleteMovie = async (req, res) => {
    const movieId = req.params.movieId;

    try{
        await Movie.findByIdAndDelete(movieId);
        return res.status(200).json({
            message : "Pelicula eliminado con su Id: " + movieId,
        });
    }catch(error){
        return res.status(500).json({
            message : "Error al eliminar su pelicula",
            data: error
        });
    }
}