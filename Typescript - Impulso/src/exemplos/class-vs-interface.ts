interface Teste {
    nome: string,
    idade: number
}

interface Humano {
    nome: string,
    idade: number,
    endereco: string
}

class Mamífero {
    public quantidadeDePatas: number;
    public temPelos: boolean;
    public nome: string;

    constructor(nome: string, quantidadeDePatas: number, temPelos: boolean) {
        this.nome = nome;
        this.quantidadeDePatas = quantidadeDePatas;
        this.temPelos = temPelos;
    }

    public dizerNome() {
        console.log("Meu nome é ", this.nome);
    }
}

const cachorro = new Mamífero('Billy', 4, true);
cachorro.dizerNome();