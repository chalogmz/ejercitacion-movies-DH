const db = require('../database/models')

const GenreModel = {
    findAll: () => {
        let generos = db.Genres.findAll()
        return generos
        .then ((res) => {
            return res})
            .catch((err) => {console.log(err)})
    },
    findById: (id) => {
        let genre = db.Genres.findByPk(id)
        return genre.then((res) => {
            return res})
            .catch((err) => err)
    }
}

module.exports = GenreModel
