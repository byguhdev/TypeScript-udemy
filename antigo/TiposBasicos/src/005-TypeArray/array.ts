// Array<T> - T[]

function multiply(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

function concatenacao(...args: Array<string>): string {
  return args.reduce((ac, valor) => ac + valor);
}

function toUpperCase(...args: Array<string>) {
  return args.map((valor) => valor.toUpperCase());
}

console.log(multiply(1, 2, 3, 4));
console.log(concatenacao('a', 'b', 'c', 'd'));
console.log(toUpperCase('a', 'b', 'c', 'd'));
