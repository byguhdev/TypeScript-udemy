// Type assertion

let statusAtual: unknown = 10;

let novoStatus: number = 0;

// Estou afirmando de fato que o statusAtual é um número
novoStatus = statusAtual as number;

// Outra forma de afirmar
novoStatus = <number>statusAtual;

console.log(novoStatus);

/* *************************************************************** */

let term: unknown = 'Pizza';

let searchTerm: string = term as string;

console.log('Encontrei o seguinte termo:', searchTerm);
