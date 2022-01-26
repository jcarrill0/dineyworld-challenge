// const { Model } = require('sequelize');
import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
  class Pelicula extends Model {
    static associate(models) {
      this.belongsToMany(models.Personaje, { 
        through: PeliculaPersonaje,
        as: 'personajes',
        foreignKey: "peliculaId",
      })

      this.hasMany(models.Genero, { as: 'generos' });

    }
  }

  Pelicula.init({
    titulo: {
        type: DataTypes.STRING,
        require: true,
        allowNull: false,
        notEmpty: true, 
    },
    fecha_creacion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    imagen: {
        type: DataTypes.STRING,
        require: true,
        allowNull: false,
        notEmpty: true,
    },
    calificacion: {
        type: DataTypes.ENUM,
        values: ['1', '2', '3', '4', '5']
    },
    personajeId: {
        type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'Pelicula',
  });

  return Pelicula;
};