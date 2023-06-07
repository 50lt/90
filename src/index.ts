import express, {Request, response, Response} from 'express'
import {productsRouter} from "./routes/products-router";
import {adressesRouter} from "./routes/adresses-router";
export const app = express()
const port = process.env.PORT || 3001

app.use('/products', productsRouter)
app.use('/adresses', adressesRouter)

app.listen(port, () => {
    console.log(`Example app listening on ${port}`)
})