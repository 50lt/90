"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adressesRouter = void 0;
const express_1 = require("express");
const adresses = [{ id: 1, value: 'Nezalejnasti 12' }, { id: 2, value: 'Selickaga 11' }];
exports.adressesRouter = (0, express_1.Router)({});
exports.adressesRouter.get('/', (req, res) => {
    res.send(adresses);
});
exports.adressesRouter.get('/:id', (req, res) => {
    let adress = adresses.find(p => p.id === +req.params.id);
    if (adress) {
        res.send(adress);
    }
    else {
        res.send(404);
    }
});
