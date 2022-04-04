const {Router} = require("express");
const { getHistorial, postHistorial } = require("../controllers/busquedas");
const router = Router();

//rutas
router.get("/historial", getHistorial);

router.post("/add", postHistorial);

module.exports = router;