//IMPORTACIÓN DE MÓDULOS
const express= require("express")
const morgan= require("morgan")

//CREA UNA INSTANCIA DE APLICACIÓN EXPRESS
const app= express()

//VER EN CONSOLA LAS PETICIONES
app.use(morgan('dev'))

app.listen(3000)
console.log("Server Port: 3000")