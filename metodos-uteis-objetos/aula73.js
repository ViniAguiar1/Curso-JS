/*
Object.values
Object.entries
Object.getOwnPropertyDescriptor(o, 'prop')
Object.assign(des, any)
... (spread)
// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/
const produto = {
    nome: "Caneca",
    preco: 1.8,
};
const outraCoisa = produto;
outraCoisa.nome = "computador";
outraCoisa.preco = 2500;

// produto.nome = "vincius aguiar";
// produto.nome = "caio cesena"; 
console.log(produto);
console.log(outraCoisa);