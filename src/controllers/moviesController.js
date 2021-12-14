const model = require ('../model/MovieModel.js')

const controller = {
    list:(req, res, next) => {
        model.findAll()
            .then((movies) => {res.render('moviesList',{movies:movies})})
            .catch((err) => res.render('error'))
    },
    detail:(req, res, next) => {
        id=req.params.id
        let movie = model.findById(id)
            movie.then((m) => {
                for(let i=0; i<m.length; i++){
                    if (m[i].id == id) {
                        res.render('moviesDetail',{movie:m[i]})
                    }if (m[i] != id){
                        next(`pelicula no encontrada. Solo existen ${m.length} peliculas disponibles`)
                    }
                }
            })
            .catch((err) => res.render('error'))
        
    }
}

module.exports = controller