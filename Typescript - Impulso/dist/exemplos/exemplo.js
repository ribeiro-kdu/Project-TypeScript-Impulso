"use strict";
var button = document.getElementById("button");
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
function somarNumeros(numero1, numero2, devePrintar, frase) {
    var resultado = numero1 + numero2;
    if (devePrintar) {
        console.log(frase, resultado);
    }
    return numero1 + numero2;
}
var devePrintar = true;
// devePrintar = false; - é possível, pois é do mesmo tipo dado à variavel no início.
// devePrintar = "coruja"; - não é possível, pois exige o tipo boolean.
var frase = "O valor é: ";
if (button) {
    button.addEventListener("click", function () {
        if (input1 && input2) {
            console.log(somarNumeros(Number(input1.value), Number(input2.value), devePrintar, frase));
        }
    });
}
