"use strict";
// function somarValoresNumericos(number1: number, number2: number) {
//     //return number1 + number2;
//     return number1 + number2.toString();
// }
// console.log(somarValoresNumericos(1, 3));
// a função sofreu alteração em um de seus valores, mas
// é possível tipar o retorno
function somarValoresNumericos(number1, number2) {
    //return number1 + number2;
    // return number1 + number2.toString();
    // assim, os tipos acima necessariamente têm que retornar
    // o tipo que foi dado para o retorno.
    return number1 + number2;
}
console.log(somarValoresNumericos(1, 3));
function printaValoresNumericos(number1, number2) {
    console.log(number1 + number2);
    // o retorno é void, pois não retorna nada
}
// Uma função callback retorna algo da função para ser usado por outra função
// que é chamada no momento da chamada da função principal.
function somarValoresNumericosETratar(number1, number2, callback) {
    var resultado = number1 + number2;
    return callback(resultado);
}
function aoQuadrado(number3) {
    return number3 * number3;
}
function dividirPorEleMesmo(number3) {
    return number3 / number3;
}
// Aqui passamos os valores que serão usados pela função e quem
// irá receber o valor do callback.
console.log(somarValoresNumericosETratar(1, 3, aoQuadrado));
console.log(somarValoresNumericosETratar(1, 3, dividirPorEleMesmo));
