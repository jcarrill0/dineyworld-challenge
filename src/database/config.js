import Sequelize from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

const { DB_NAME, DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env;

//create sequelize object for database connection
const conn = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, 
    {
        host: DB_HOST,
        dialect: 'postgres',
        define: {
            timestamps: true
        }, 
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);

export default conn
// export { Sequelize, conn }

// Or you can simply use a connection uri
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');