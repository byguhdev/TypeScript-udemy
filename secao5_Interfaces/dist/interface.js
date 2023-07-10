"use strict";
// Interfaces
const loja1 = {
    nome: "Magazine Baiana",
    endereco: "Rua Marechal Deodoro Fonseca",
    status: true,
};
//console.log(loja1);
function loja2({ nome, endereco, status }) {
    console.log(`O nome da loja é: ${nome}`);
    console.log(`O endereço da loja é: ${endereco}`);
    console.log(`A loja está: ${status ? "Aberta" : "Fechada"}`);
}
loja2({ nome: "Baianão Moveis", endereco: "Rua 15 de novembro", status: true });
