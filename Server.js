//Paquetes
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const {dbConnection} = require("./database/dbConfig");

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

//Conexión Base de datos
dbConnection();
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB conexión establecida exitosamente");
});
//rutas 
app.use("/busquedas", require("./routes/busquedas"));
/* app.use(function(req, res, next) {
  res.status(404).render('error/404.html');
}); */

app.listen(port, ()=>{
    console.log(`Servidor corriendo en el puerto ${port}`);
});
