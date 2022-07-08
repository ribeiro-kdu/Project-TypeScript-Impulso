// let buttonTeste = document.getElementById("button");

//     buttonTeste?.addEventListener("click", () => {
//         if(input1 && input2) {
//             console.log(somarNumeros(Number(input1.value), Number(input2.value), devePrintar, frase));
//         } 
//     })
//Funciona mesmo!!!

// somente os arquivos da pasta src serão
// transpilados para js e colocados na pasta dist
// como definido com outDir e rootDir
// caso queira fazer o mesmo com arquivos fora
// do rootDir, basta dar um tsc e o nome do arquivo.ts


// colocando uma interrogação (optional chain), se ele existir roda o que está em seguida.
// o transpilador está com es5 ativado e portanto fará a transpilação para que o
// js antigo entenda.

//Anotações finais:
// tsconfig.json
// lib diz especificamente quais bibliotecas você precisa para o código e, caso não seja usada,
// coloca todas as recomendadas.

// OutDir diz para onde os js serão colocados (ex.: dist).
// "rootDir": "src"
// "include": [*src/**/*.ts] >> entrar na pasta e pegar todos
// os arquivos .ts .

// strictNullChecks: false, para de fazer checagem de valores nulos e deixa eles passarem
// o true, no entanto, faz o oposto. Por padrão, é true.

// NoEmplicitAny é usado para tornar o typescript em javascript, porque aceita tipo ANY.
