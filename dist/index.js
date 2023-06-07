"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_router_1 = require("./routes/products-router");
const adresses_router_1 = require("./routes/adresses-router");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use('/products', products_router_1.productsRouter);
app.use('/adresses', adresses_router_1.adressesRouter);
app.listen(port, () => {
    console.log(`Example app listening on ${port}`);
});
