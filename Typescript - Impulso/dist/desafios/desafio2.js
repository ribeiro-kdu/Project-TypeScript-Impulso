"use strict";
// Como podemos melhorar o esse código usando TS? 
var Profissoes;
(function (Profissoes) {
    Profissoes[Profissoes["Atriz"] = 0] = "Atriz";
    Profissoes[Profissoes["Padeiro"] = 1] = "Padeiro";
})(Profissoes || (Profissoes = {}));
var pessoa1 = {
    nome: 'Maria',
    idade: 29,
    profissao: Profissoes.Atriz
};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"
var pessoa2 = {
    nome: 'Roberto',
    idade: 19,
    profissao: Profissoes.Padeiro
};
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";
var pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: Profissoes.Atriz
    // idade: "32",
    // profissao: "Atriz"
};
var pessoa4 = {
    nome: 'Carlos',
    idade: 19,
    profissao: Profissoes.Padeiro
    // nome = "carlos",
    // idade = 19,
    // profissao = "padeiro"
};
// Outras respostas:
// enum Trabalho {
//     Atriz,
//     Padeiro
// }
// type Humano = {
//     nome: string,
//     idade: number,
//     profissao: Trabalho
// }
// let pessoa1: Humano = {
//     nome: 'maria',
//     idade: 29,
//     profissao: Trabalho.Atriz
// };
// let pessoa2: Humano = {
//     nome: 'roberto',
//     idade: 19,
//     profissao: Trabalho.Padeiro
// };
// let pessoa3: Humano = {
//     nome: 'laura',
//     idade: 32,
//     profissao: Trabalho.Atriz
// };
// let pessoa4: Humano = {
//     nome: "carlos",
//     idade: 19,
//     profissao: Trabalho.Padeiro
// }
