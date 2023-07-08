// Funções

let n1: number = 10;
let n2: number = 23;

//            Parametros                  Retorno
function soma(num1: number,num2: number): number {
    let somar = num1 + num2;
    return somar;
}

console.log(soma(n1,n2));

function mostraCaracteres(varchar: (string | number)){
    return varchar;
}

console.log(mostraCaracteres(112));
console.log(mostraCaracteres("@&$<>"));
