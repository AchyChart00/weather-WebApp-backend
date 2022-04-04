const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("Base de datos online");
  } catch (e) {
    console.log(e);
    throw new Error("Error al iniciar la base de datos");
  }
};

module.exports={
  dbConnection
}
