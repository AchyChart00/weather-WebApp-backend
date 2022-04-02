const {Router} = require("express");
const { putHistorial, getHistorial } = require("../controllers/busquedas");
const router = Router();

//rutas
router.get("/historial", getHistorial);

router.get("/historial", putHistorial);