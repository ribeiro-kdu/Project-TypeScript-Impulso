let valorAny: any;

valorAny = 1;
valorAny = "olá";
valorAny = true;

// aceita qualquer tipo

let valorString: string = 'teste';
// valorString = true; 
// não aceita porque é de tipo definido;

valorString = valorAny;
// não retorna erro, mesmo que valorAny tenha um valor
// do tipo buleano

let valorString2: string = 'testao';
valorString2 = valorAny;

function somarString (string1: string, string2: string) {
    console.log(string1 + string2);
}

somarString(valorString, valorString2);
// não retorna erro mesmo que agora seu valor seja buleano,
// pois é igual a uma variável do tipo ANY

somarString('olá, ', 'como vai?');

// usar um eslint para proibir o uso de anys é uma
// saída para o problema