"use strict";
// Type Alias
function LogUser(uid, nome) {
    console.log(`${nome} seu user id é: ${uid}`);
}
function showUser(uid, nome) {
    console.log(`Bem vindo de volta ${nome}`);
}
LogUser(123, "Marcio");
showUser(null, "Jeovana");
function Mercado(moeda) {
    console.log(`Comprando com a moeda: ${moeda}`);
}
Mercado("BRL");
