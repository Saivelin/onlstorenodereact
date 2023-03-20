const db = require("../db")
const fileUpload = require('express-fileupload');

class ProdController {
    async createProd(req, res) {
        const { title, description, price, oldprice, img, category } = req.body
        const image = req.files.img;
        if (oldprice == "" && oldprice == undefined) {
            oldprice = 0
        }
        const newProd = await db.query(`INSERT INTO products (title, description, price, oldprice, img, category) values ($1, $2, $3, $4, $5, $6) RETURNING *`, [title, description, price, oldprice, image.name, category])
        // console.log(req.files)
        image.mv(__dirname + '/upload/products/' + image.name);

        res.json(newProd.rows[0])
    }

    async getProd(req, res) {
        const prods = await db.query("SELECT * FROM products")
        console.log(prods.rows)
        res.json(prods.rows);
    }

    async getOneProd(req, res) {
        const id = req.params.id
        const prods = await db.query(`SELECT * FROM products WHERE id=$1`, [id])
        res.json(prods.rows[0]);
    }

    async getByCategory(req, res) {
        const cat = req.params.id
        const prods = await db.query(`SELECT * FROM products WHERE category=$1`, [cat])
        res.json(prods.rows)
    }

    async updateProd(req, res) {

    }

    async deleteProd(req, res) {

    }
}

module.exports = new ProdController()