class Loja {
    // Atributos
    nome: string;
    categoria: string;

    constructor(nome: string, categoria: string){
        this.nome = nome;
        this.categoria = categoria
    }
}

const myShopp = new Loja("Big Hot Dog", "Fast Food");

console.log(myShopp.nome); // Big Hot Dog
console.log(myShopp.categoria); // Fast Food
