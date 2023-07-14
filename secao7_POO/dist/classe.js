"use strict";
class Loja {
    constructor(nome, categoria) {
        this.nome = nome;
        this.categoria = categoria;
    }
}
const myShopp = new Loja("Big Hot Dog", "Fast Food");
console.log(myShopp.nome); // Big Hot Dog
console.log(myShopp.categoria); // Fast Food
