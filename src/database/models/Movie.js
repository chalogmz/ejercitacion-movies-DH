module.exports = (sequelize, DataType) => {
    const alias = 'Movies'
    const colums = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type:DataType.INTEGER,
        },
        title:{
            type:DataType.STRING,
        },
        rating:{
            type:DataType.DOUBLE,
        },
        awards:{
            type:DataType.INTEGER,
        },
        genre_id:{
            type:DataType.INTEGER,
        }
    }
    const config = {
        tableName: 'Movies',
        timestamps: false
    }

    const movie = sequelize.define(alias, colums, config)

    return movie
}