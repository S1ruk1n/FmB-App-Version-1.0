const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get("/", controller.getBanken);
router.post("/", controller.addBanken); 
router.get("/:id", controller.getBankenById);
router.put("/", controller.updateBanken);
router.delete("/:id", controller.removeBanken);



module.exports = router;