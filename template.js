"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Televisao = void 0;
var Televisao = /** @class */ (function () {
    function Televisao() {
    }
    Televisao.prototype.templateMethod = function () {
        // define o esqueleto do algoritmo
        this.ligar();
        this.operacao_requerida1();
        this.mudarCanalCima();
        this.mudarCanalBaixo();
        this.aumentarVolume();
        this.hook();
        this.operacao_requerida2();
        this.desligar();
    };
    // metodos implementados
    Televisao.prototype.ligar = function () {
        console.log("Ligando TV!");
    };
    Televisao.prototype.operacao_requerida1 = function () {
        console.log("Modifique na subclasse");
    };
    Televisao.prototype.mudarCanalCima = function () {
        console.log("Mudando canal para cima!");
    };
    Televisao.prototype.mudarCanalBaixo = function () {
        console.log("Mudando canal para baixo!");
    };
    Televisao.prototype.aumentarVolume = function () {
        console.log("Aumentar volume!");
    };
    Televisao.prototype.hook = function () {
        console.log("Posso ser sobrescrito!");
    };
    Televisao.prototype.operacao_requerida2 = function () {
        console.log("Modifique na subclasse");
    };
    Televisao.prototype.desligar = function () {
        console.log("Desligando a TV!");
    };
    return Televisao;
}());
exports.Televisao = Televisao;
var Samsung = /** @class */ (function (_super) {
    __extends(Samsung, _super);
    function Samsung() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.propriedades = {
            largura: "78",
            altura: "126,4",
        };
        return _this;
    }
    Samsung.prototype.ligar = function () {
        console.log("Ligando TV Samsung!");
    };
    Samsung.prototype.operacao_requerida1 = function () {
        console.log("Conectando na Wifi");
    };
    Samsung.prototype.operacao_requerida2 = function () {
        console.log("Espelhando dispositivo na TV!");
    };
    Samsung.prototype.desligar = function () {
        console.log("Desligando a TV Samsung!");
    };
    return Samsung;
}(Televisao));
var Lg = /** @class */ (function (_super) {
    __extends(Lg, _super);
    function Lg() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.propriedades = {
            largura: "90",
            altura: "159,4",
        };
        return _this;
    }
    Lg.prototype.ligar = function () {
        console.log("Ligando TV LG!");
    };
    Lg.prototype.operacao_requerida1 = function () {
        console.log("TV antiga sem conexão com wifi!");
    };
    Lg.prototype.operacao_requerida2 = function () {
        console.log("TV antiga sistema nao suporta espelhamento!");
    };
    Lg.prototype.desligar = function () {
        console.log("Desligando a TV LG!");
    };
    return Lg;
}(Televisao));
//funcao para chamar o metodo template
function codigo_cliente(Televisao) {
    Televisao.templateMethod();
}
console.log("Mesmo codigo funciona para diferentes subclasses");
codigo_cliente(new Samsung());
console.log("");
codigo_cliente(new Lg());
console.log("");
