//const express = require('express')
import express from 'express'
import {dirname,join} from 'path'
import {fileURLToPath} from 'url'

import indexRoutes from './routes/index.js'

const app=express()
const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', join(__dirname,'views'))//Indicacion de la ruta de las vistas
app.set('view engine','ejs') //Motor de plantillas para extender el html y añadir logica dentro de programacion en html

app.use(indexRoutes)
app.use(express.static(join(__dirname,'public')))

app.listen(process.env.PORT || 3000)
console.log('Server is listening on port', process.env.PORT|| 3000)