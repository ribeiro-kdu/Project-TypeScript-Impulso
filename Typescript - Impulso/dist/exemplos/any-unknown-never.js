"use strict";
var anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;
var stringTest = 'verificar';
stringTest = anyEstaDeVolta;
var unknownValue;
unknownValue = 3;
unknownValue = 'opa';
unknownValue = true;
var stringTest2 = 'agora vai';
// stringTest2 = unknownValue;
// unknown serve para alocar um valor da maneira correta, pois
// pode ser que seu valor fique variando o tipo e seja difícil
// definí-lo de imediato. Assim o tratamento vem depois.
if (typeof unknownValue === 'string') {
    stringTest2 = unknownValue;
}
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
// Usamos o tipo never para um código que nunca finalizou,
// mas ele foi parado...
// O throw interrompeu o fluxo do código
jogaErro('deu erro', 500);
