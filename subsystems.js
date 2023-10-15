"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delivery = exports.cozinha = exports.Pedido = void 0;
var Pedido = /** @class */ (function () {
    function Pedido() {
    }
    Pedido.prototype.gethamburquer = function () {
        console.log('> Hamburguer selecionado...');
    };
    return Pedido;
}());
exports.Pedido = Pedido;
var cozinha = /** @class */ (function () {
    function cozinha() {
    }
    cozinha.prototype.separado = function () {
        console.log('> Preparando o lanche...');
    };
    cozinha.prototype.realizado = function () {
        console.log('> Seu pedido está pronto...');
    };
    return cozinha;
}());
exports.cozinha = cozinha;
var Delivery = /** @class */ (function () {
    function Delivery() {
    }
    Delivery.prototype.send = function () {
        console.log('> Hamburguer saiu para entrega!!');
    };
    return Delivery;
}());
exports.Delivery = Delivery;
