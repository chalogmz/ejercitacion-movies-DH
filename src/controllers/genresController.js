const model = require ('../model/GenreModel.js')

const controller = {
    list:(req, res, next) => {
        model.findAll()
            .then((genres) => {res.render('genresList',{genres:genres})})
            .catch((err) => res.render('error'))
    },
    detail:(req, res, next) => {
        let id = req.params.id
        let movie = model.findById(id)
            movie.then((genres) => {
                res.render('genresDetail',{genre:genres})
            })
            .catch((err) => res.render(err))
    }          
}

module.exports = controller
