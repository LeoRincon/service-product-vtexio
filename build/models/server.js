"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const ProductRouter = require('../routes/product.routes');
class Server {
    constructor() {
        //Properties
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || 8080;
        this.apiPath = '/api/v1';
        this.productPath = `${this.apiPath}/products`;
        // MiddleWares
        this.middleware();
        // Methods
        this.routes();
    }
    routes() {
        this.app.use(this.productPath, ProductRouter);
    }
    middleware() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static('public'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`app running in the port ${this.port}`);
        });
    }
}
exports.default = Server;
