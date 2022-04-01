//Paquetes
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//variable de entorno
require("dotenv").config();

//Creamos variable para implementar express
const app = express();

//variable que recibe y se le asigna el puerto 
//desde la variable de entorno.
const port = process.env.PORT || 5000;

app.use(cors());

//Parseo de solicitudes entrantes
app.use(express.json());


app.listen(port, ()=>{
    console.log(`Servidor corriendo en el puerto ${port}`);
});
