"use strict";
class Sorveteria {
  constructor(nome, categoria) {
    this.nome = nome;
    this.categoria = categoria;
  }

  statusLoja(status) {
    switch (status) {
      case "ABERTO":
        console.log(`A loja está aberta hoje`);
        break;
      case "FECHADO":
        console.log(`A loja está fechada hoje`);
        break;
      default:
        break;
    }
  }
}
const filial = new Sorveteria("Nr Shake", "gelados");
filial.statusLoja("ABERTO");
