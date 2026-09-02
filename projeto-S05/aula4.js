/*
let numero = 42;
let texto = "olá";

console.log(typeof numero === "number");
console.log(typeof numero === typeof texto);
*/

let pessoa = {nome: "joão",
     idade: 30,
      profissão: "engenheiro"
    };

    console.log(pessoa.nome);
    console.log(pessoa["nome"]);
    let chave = "nome";
    console.log(pessoa[chave]);

    for (let chave in pessoa){
      console.log(chave + ": " + pessoa[chave]);
    }