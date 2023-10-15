"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hamburguer = void 0;
var subsystems_1 = require("./subsystems");
var Hamburguer = /** @class */ (function () {
    function Hamburguer() {
    }
    Hamburguer.prototype.order = function () {
        var deposit = new subsystems_1.Pedido();
        var pedido = new subsystems_1.cozinha();
        var delivery = new subsystems_1.Delivery();
        deposit.gethamburquer();
        pedido.separado();
        pedido.realizado();
        delivery.send();
    };
    return Hamburguer;
}());
exports.Hamburguer = Hamburguer;
