// Type Alias

type Uid = string | number | null; 

function LogUser(uid: Uid, nome: string) {
  console.log(`${nome} seu user id é: ${uid}`);
}

function showUser(uid: Uid, nome: string) {
    console.log(`Bem vindo de volta ${nome}`);
}

LogUser(123, "Marcio");
showUser(null, "Jeovana");

type Moedas = "BRL" | "EUR" | "CAD";

function Mercado(moeda: Moedas){
    console.log(`Comprando com a moeda: ${moeda}`);
}

Mercado("BRL");