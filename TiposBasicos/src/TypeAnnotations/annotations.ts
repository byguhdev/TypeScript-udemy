/* eslint-disable */

// Tipos Básicos (aqui ocorre inferência de tipos)
let nome: string = 'Guga'; // Qualquer tipo de string '' "" ``
let idade: number = 30; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0b7744
let adulto: boolean = true; // true or false
let simbolo: symbol = Symbol('Qualquer-symbol'); // symbol
//let big: bigint = 10n;

// Arrays
//                 O tipo          O array em si.
let arraysNumbers: Array<number> = [1, 2, 3, 4, 5];
let arraysNumbers2: number[] = [1, 2, 3, 4, 5];
let arraysString: Array<string> = ['a', 'b', 'c'];
let arraysString2: string[] = ['a', 'b', 'c'];

// Objetos

let pessoas: {
  nome: string;
  sobrenome: string;
  idade: number;
  adulto?: boolean;
  peso: number;
} = {
  nome: 'ADM',
  sobrenome: 'Santos',
  idade: 1000,
  peso: 80,
  adulto: true,
};

//console.log(pessoas);

// Funções

function multiplica(x: number, y: number): number {
  return x * y;
}
//          O tipo                             A função em si.
const soma: (x: number, y: number) => number = (x, y) => x + y;

const multiplicar = multiplica(2, 66);
const somar = soma(122, 22);

console.log(multiplicar);
console.log(somar);
