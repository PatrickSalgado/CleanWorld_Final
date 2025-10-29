const express = require("express");
const router = express.Router();
const wasteTypeController = require("../controller/wasteTypeController.js");

router.get("/wasteType", wasteTypeController.getAllCollector);
router.post("/wasteType", wasteTypeController.createCollector);
router.put("/wasteType/:wasteType", wasteTypeController.updateCollector);
router.delete("/wasteType/:wasteType", wasteTypeController.deleteCollector);
router.get("/wasteType/:wasteType", wasteTypeController.getCollectorById);


module.exports = router;