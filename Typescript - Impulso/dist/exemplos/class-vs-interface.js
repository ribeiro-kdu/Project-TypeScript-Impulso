"use strict";
var Mamífero = /** @class */ (function () {
    function Mamífero(nome, quantidadeDePatas, temPelos) {
        this.nome = nome;
        this.quantidadeDePatas = quantidadeDePatas;
        this.temPelos = temPelos;
    }
    Mamífero.prototype.dizerNome = function () {
        console.log("Meu nome é ", this.nome);
    };
    return Mamífero;
}());
var cachorro = new Mamífero('Billy', 4, true);
cachorro.dizerNome();
