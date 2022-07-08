// Como podemos melhorar o esse código usando TS? 

enum Profissoes {
    Atriz,
    Padeiro
}

interface Pessoas { // coloquei interface ao invés de type
    nome: string,
    idade: number,
    profissao: Profissoes
}

let pessoa1: Pessoas = {
    nome: 'Maria',
    idade: 29,
    profissao: Profissoes.Atriz
};

// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"

let pessoa2: Pessoas = {
    nome: 'Roberto',
    idade: 19,
    profissao: Profissoes.Padeiro
}

// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";

let pessoa3: Pessoas = {
    nome: "laura",
    idade: 32,
    profissao: Profissoes.Atriz
    // idade: "32",
    // profissao: "Atriz"
};

let pessoa4: Pessoas = {
    nome: 'Carlos',
    idade: 19,
    profissao: Profissoes.Padeiro
    // nome = "carlos",
    // idade = 19,
    // profissao = "padeiro"
}

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