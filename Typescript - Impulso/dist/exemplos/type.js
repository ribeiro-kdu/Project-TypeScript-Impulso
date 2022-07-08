"use strict";
// Esse abaixo ficaria muito longo e complexo. Pode-se simplificá-lo
// function somarValores(input1: number | string, input2: number | string) {
//     if(typeof input1 === 'string' || typeof input2 === 'string') {
//     return input1.toString() + input2.toString;
//     } else {
//     return input1 + input2;
//     }
// }
function somarValores(input1, input2) {
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        return input1.toString() + input2.toString();
    }
    else {
        return input1 + input2;
    }
}
console.log(somarValores(1, 5));
console.log(somarValores('oi, ', 'tudo bem?'));
console.log(somarValores('1', 5));
