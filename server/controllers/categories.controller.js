const db = require("../db")

class CategoriesController {
    async createCat(req, res) {
        const { name } = req.body
        const newCat = await db.query(`INSERT INTO categories (name) values ($1) RETURNING *`, [name])
        res.json(newCat.rows[0])
    }

    async getCat(req, res) {
        const Cats = await db.query("SELECT * FROM categories")
        console.log(Cats.rows)
        res.json(Cats.rows);
    }

    async getOneCat(req, res) {
        const id = req.params.id
        const Cats = await db.query(`SELECT * FROM categories WHERE id=$1`, [id])
        res.json(Cats.rows[0]);
    }

    async getByCategory(req, res) {
        const cat = req.params.id
        const Cats = await db.query(`SELECT * FROM categories WHERE category=$1`, [cat])
        res.json(Cats.rows)
    }

    async updateCat(req, res) {

    }

    async deleteCat(req, res) {

    }
}

module.exports = new CategoriesController()