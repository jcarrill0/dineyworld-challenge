// const fileUpload = require('express-fileupload')

// const { dbConnection } = require('../database/config')

import express, { json } from 'express'
import cors from 'cors'
import morgan from 'morgan'
// import dotenv from 'dotenv/config';

import { conn } from '../models'
import { authRouter } from '../routes'



class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT || 8080
        this.paths = {
            auth:       '/api/auth',
            buscar:     '/api/buscar',
            categorias: '/api/categorias',
            usuarios:   '/api/usuarios',
            productos:  '/api/productos',
            uploads:    '/api/uploads'
        }

        // Conexion a DB
        // this.conectarDB()

        //Middlewares
        this.middlewares()

        // Rutas de mi aplicación 
        // this.routes()
    }

    async conectarDB() {
        // await dbConnection()
        conn.sync()
    }

    middlewares() {
        // CORS
        this.app.use(cors())

        // Mirar por consola las peticiones que van llegando
        this.app.use(morgan('dev'))

        // Lectura y parseo del body
        this.app.use(json())

        // Directorio público
        this.app.use(this.app.static('public'))

        // Fileupload - carga de archivos
        // this.app.use(fileUpload({
        //     useTempFiles : true,
        //     tempFileDir : '/tmp/',
        //     createParentPath: true
        // }));
    }

    routes() {
        const { auth } = this.paths

        this.app.use(auth, authRouter)
        // this.app.use(this.paths.buscar, require('../routes/buscar'))
        // this.app.use(this.paths.categorias, require('../routes/categorias'))
        // this.app.use(this.paths.productos, require('../routes/productos'))
        // this.app.use(this.paths.usuarios, require('../routes/usuarios'))    
        // this.app.use(this.paths.uploads, require('../routes/uploads'))    
    }
 
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server run a port: ', this.port)
        })
    }
}

export default Server