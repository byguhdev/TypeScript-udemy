// Type ANY | Ou seja qualquer coisa, evitar usar!!!

// nota1 -> any explicito;
let nota1: any;
// nota2 -> any implicito;
let nota2;

nota1 = 12;
nota2 = "43";

let soma: number | string = nota1 + nota2;
console.log(soma); // 1243
