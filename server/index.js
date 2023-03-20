const express = require("express")
const fileUpload = require('express-fileupload');
const prodRouter = require("./routes/prod.routes.js")
// const ProdRouter = require("./routes/prod.routes")

const PORT = process.env.PORT ?? 8080;
const app = express()

app.use(fileUpload());
app.use(express.static('public'));
app.use(express.json())
app.use('/api', prodRouter)

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
});