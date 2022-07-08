"use strict";
var pessoa = {
    nome: 'Mariana',
    idade: 20,
    profissao: 'cozinheira'
};
// pessoa.idade = '23'; - não é possível por causa
// da inferência existente de que idade é do tipo
// number.
pessoa.idade = 23;
var andre = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
};
var paula = {
    nome: 'Paula',
    idade: 25,
    profissao: 'Cozinheira'
    // aceita diferentes entradas, letra maiúscula ou minúscula.
};
// fazer um enum para definir uma 'máscara' ou padronizar a entrada
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["Cozinheira"] = 3] = "Cozinheira";
    Profissao[Profissao["JogadorDeFutebol"] = 4] = "JogadorDeFutebol";
})(Profissao || (Profissao = {}));
var vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
    // profissao é do tipo criado (através da interface), padronizando
    // a entrada.
};
var maria = {
    nome: 'Maria',
    idade: 30,
    profissao: Profissao.Desenvolvedora
};
var jessica = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Cozinheira,
    materias: ['Materia discreta', 'programacao']
};
var monica = {
    nome: 'Jessica',
    idade: 28,
    materias: ['Materia discreta', 'programacao']
    // monica não tem profissao mas não gera erro pois é uma propriedade
    // opcional.
    // se não tivesse a propriedade idade teríamos um erro.
};
function listar(lista) {
    for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
        var item = lista_1[_i];
        console.log(' ', item);
    }
}
listar(monica.materias);
