const Router = require("express")
const router = new Router()
const ProdController = require("../controllers/prod.controller")

router.post("/products", ProdController.createProd)
router.get("/products", ProdController.getProd)
router.get("/products/category/:id", ProdController.getByCategory)
router.get("/products/:id", ProdController.getOneProd)
router.put("/products/:id", ProdController.updateProd)
router.delete("/products/:id", ProdController.deleteProd)


module.exports = router