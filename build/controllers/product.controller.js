"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProducts = exports.patchProducts = exports.putProducts = exports.postProducts = exports.getProducts = void 0;
const getProducts = (req, res) => {
    res.json({
        msg: 'get API products',
    });
};
exports.getProducts = getProducts;
const postProducts = (req, res) => {
    const body = req.body;
    res.json({
        msg: 'post API',
        body,
    });
};
exports.postProducts = postProducts;
const putProducts = (req, res) => {
    const id = req.params.id;
    res.json({
        msg: 'put API',
        id,
    });
};
exports.putProducts = putProducts;
const patchProducts = (req, res) => {
    res.json({
        msg: 'patch API',
    });
};
exports.patchProducts = patchProducts;
const deleteProducts = (req, res) => {
    res.json({
        msg: 'delete API',
    });
};
exports.deleteProducts = deleteProducts;
