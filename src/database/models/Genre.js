module.exports = (sequelize, DataType) => {
    const alias = 'Genres'

    const colums = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataType.INTEGER,
        },
        name: {
            type: DataType.STRING,
            allowNull: true,
        },
        ranking: {
            type: DataType.INTEGER,
            allowNull: true,
        },
    }

    const config = {
        tableName: 'Genres',
        timestamps: false
    }

    const genre = sequelize.define(alias, colums, config)

    return genre
}