// const { Model } = require('sequelize');
import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      // define association here
    }
  }

  Usuario.init({
    email: {
      type: DataTypes.STRING,
      unique: true,
      require: true,
      allowNull: false,
      notEmpty: true,
      validate: {
          isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      require: true,
      allowNull: false,
      notEmpty: true
    }
  }, {
    sequelize,
    modelName: 'Usuario',
  });

  return Usuario;
};