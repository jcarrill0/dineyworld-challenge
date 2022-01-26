// const { Model } = require('sequelize');
import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
  class Personaje extends Model {
    static associate(models) {
      this.belongsToMany(models.Pelicula, { 
        through: PeliculaPersonaje,
        as: 'peliculas',
        foreignKey: "personajeId",
      })
    }
  }

  Personaje.init({
    nombre: {
        type: DataTypes.STRING,
        require: true,
        allowNull: false,
        notEmpty: true,  
    },
    edad: {
        type: DataTypes.INTEGER
    },
    imagen: {
        type: DataTypes.STRING,
        require: true,
        allowNull: false,
        notEmpty: true,
    },
    peso: {
        type: DataTypes.FLOAT
    },
    historia: {
        type: DataTypes.TEXT,
        require: true,
        allowNull: false,
        notEmpty: true,
    },
    peliculaId: {
        type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'Personaje',
  });

  return Personaje;
};