const pessoa = {
    nome: 'Mariana',
    idade: 20,
    profissao: 'cozinheira'
}

// pessoa.idade = '23'; - não é possível por causa
// da inferência existente de que idade é do tipo
// number.

pessoa.idade = 23;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Paula',
    idade: 25,
    profissao: 'Cozinheira'

// aceita diferentes entradas, letra maiúscula ou minúscula.
}

// fazer um enum para definir uma 'máscara' ou padronizar a entrada

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    Cozinheira,
    JogadorDeFutebol
}

// para evitar tipar as propriedades de cada objeto repetidamente
interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
// profissao passa a não ser obrigatória pela adição de '?'
}

interface Estudante extends Pessoa {
    materias: string[]
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
// profissao é do tipo criado (através da interface), padronizando
// a entrada.
}

const maria: Pessoa = {
    nome: 'Maria',
    idade: 30,
    profissao: Profissao.Desenvolvedora
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Cozinheira,
    materias: ['Materia discreta', 'programacao']
}

const monica: Estudante = {
    nome: 'Jessica',
    idade: 28,
    materias: ['Materia discreta', 'programacao']
// monica não tem profissao mas não gera erro pois é uma propriedade
// opcional.
// se não tivesse a propriedade idade teríamos um erro.
}

function listar(lista: string[]) {
    for (const item of lista) {
        console.log(' ', item);
    }
}

listar(monica.materias);