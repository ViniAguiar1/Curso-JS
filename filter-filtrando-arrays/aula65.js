// filter, map, reduce
// Filter -> Sempre retornar um array, com a mesma quantidade de elementos
// ou menos.

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 
    15, 22, 27];

    // function callbackFilter(valor){
       // return valor > 10;
    // }; 

    const numerosFiltrados = numeros.filter(function(valor){
        return valor > 10;
    });
    console.log(numerosFiltrados);

    // retorne as pessoas que tem o nome com 5 letras ou mais
    // retorne as pessoas com mais de 50 anos
    // retorne as pessoas cujo nome termina com a
    const pessoas =[
        { nome: 'Luiz', idade: 62}, 
        { nome: 'Vinicius', idade: 19},
        { nome: 'Luana', idade: 26},
        { nome: "felipe", idade: 15},
        { nome: 'raquel', idade: 40},
        { nome: "aldenor", idade: 60},
    ];