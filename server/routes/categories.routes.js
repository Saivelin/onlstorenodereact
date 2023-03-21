const Router = require("express")
const router = new Router()
const CatController = require("../controllers/categories.controller")

router.post("/categories", CatController.createCat)
router.get("/categories", CatController.getCat)
router.get("/categories/category/:id", CatController.getByCategory)
router.get("/categories/:id", CatController.getOneCat)
router.put("/categories/:id", CatController.updateCat)
router.delete("/categories/:id", CatController.deleteCat)


module.exports = router