//IMPORTACIÓN DE MÓDULOS
const express= require("express")
const morgan= require("morgan")

//EXPORTA LAS RUTAS DEFINIDAS COMO ENDPOINTS
const taskRoutes= require('./routes/tasks.routes')

//CREA UNA INSTANCIA DE APLICACIÓN EXPRESS
const app= express()

//VER EN CONSOLA LAS PETICIONES
app.use(morgan('dev'))

//
app.use(taskRoutes)

app.listen(3000)
console.log("Server Port: 3000")