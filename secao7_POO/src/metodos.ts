type Status = "ABERTO" | "FECHADO";

class Sorveteria {
  // Atributos
  nome: string;
  categoria: string;

  constructor(nome: string, categoria: string) {
    this.nome = nome;
    this.categoria = categoria;
  }

  statusLoja(status: Status) {
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
