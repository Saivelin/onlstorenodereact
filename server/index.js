const express = require("express")
const fileUpload = require('express-fileupload');
const prodRouter = require("./routes/prod.routes.js")
const catRouter = require("./routes/categories.routes.js")
const cors = require('cors');
// const ProdRouter = require("./routes/prod.routes")

const PORT = process.env.PORT ?? 8080;
const app = express()

app.use(cors({
    origin: '*'
}));
app.use(fileUpload());
app.use(express.static('public'));
app.use(express.json())
app.use(express.static('public'));
app.use('/images', express.static('controllers/upload/products'));
app.use('/api', prodRouter, catRouter)

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
});