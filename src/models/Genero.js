// const { Model } = require('sequelize');
import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
  class Genero extends Model {
    static associate(models) {
      this.belongsTo(models.Pelicula, { 
        as: 'peliculas',
        foreignKey: "generoId",     
      });
    }
  }

  Genero.init({
    nombre: {
        type: DataTypes.STRING,
        require: true,
        allowNull: false,
        notEmpty: true,  
    },
    imagen: {
        type: DataTypes.STRING,
        require: true,
        allowNull: false,
        notEmpty: true,
    },
    peliculaId: {
        type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'Genero',
  });

  return Genero;
};