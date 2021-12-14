const db = require('../database/models')
const MovieModel = {
    findAll: () => {
        let peliculas = db.Movies.findAll()
            return peliculas
            .then((res) => {
                return res})
                .catch((err) => err);
    },
    findById: (id) => {
        let pelicula = db.Movies.findAll();
        return pelicula
        .then((res) => {
            return res})
            .catch((err) => err);
    }
}

module.exports = MovieModel
