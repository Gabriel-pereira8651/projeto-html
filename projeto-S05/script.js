//declarando variaveis
/*
var x, y, z;
x = 5;
y = 6;
z = x + y;
console.log(z)
*/

/*

function exemploLet() {
    var x = 10;
    console.log(x); //saida: 10

if (true){
    var x = 20;
    console.log(x); //saida: 20
}

comsole.log(x);

}

exemploLet();
*/ //tipo de variavel

//numeros

/*
let inteiro = 10;
let decimal = 10.5;
console.log(typeof inteiro);

console.log(Math.pow(2,3));
console.log(Math.sqrt(16));

*/

/*
let nome = "joão";
let saudacao = "olá, " + nome + "!";
console.log(saudacao);

let mensagem = "Bem Vindo";
mensagem += " ao JavaScript";
console.log(mensagem);

let texto = "JavaScript";
console.log(texto.length);
*/ //string


/*
let frutas = [];
frutas.push("Laranja");
frutas.pop();
frutas.push("Laranja","maça","banana");
let tamanho = frutas.length;

console.log(frutas);
console.log(tamanho);
console.log(frutas[2]);

frutas.forEach(fruta => console.log(fruta));
*/

/*
let idade = 18;
if(idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idae");
}

let nota = 85;

    if (nota >= 90 && idade == 18){
console.log("aprovado com excelencia");
    } else if(nota >= 70){
console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
        */

    for (let i = 0; i < 5; i++) {
        console.log("Iteração " + i);
    }

    let cores = ["vermelho", "Verde","Azul"];
    For(let i = 0; i < cores.length; i++){
console.log(cores[i]);
    }