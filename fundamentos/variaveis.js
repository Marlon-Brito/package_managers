/**
 * Tutorial Node.js
 * Variáveis
*/

console.log('____________________________________ const');

// tipagem de dados dinâmica com atribuição
const nome = 'Marlon Brito';
console.log(nome);
console.log(typeof nome);

console.log('____________________________________');

const pi = 3.14;
console.log(pi);
console.log(typeof pi);

console.log('____________________________________');

const vip = true;
console.log(vip);
console.log(typeof vip);
// não dá para redeclarar e nem modificar uma const
//const nome = 'Aluno';
//pi = 3.1415;
console.log('____________________________________ var');

var time = 'Barcelona';
console.log(time);
time = 'Palmeiras';
console.log(time);
// problema no uso do var para declarar uma variável: redeclaração de variáveis
var time = 'PSG';
console.log(time);

console.log('____________________________________ let');
// a solução para esse problema é usar o let: não permite redeclarar uma variável
let linguagem = 'Java';
console.log(linguagem);
linguagem = 'JavaScript';
console.log(linguagem);
//let linguagem = 'C#';