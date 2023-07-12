// Readonly --> Apenas leitura

interface IFood {
  readonly id: string;
  nome: string;
  descricao: string;
}

let Hamburguer: IFood = {
    id: "1",
    nome: "X bacon",
    descricao: "Novo hamburguer com 4x bacon"
};

// Não é possível atribuir a 'id' porque é uma propriedade de somente leitura.
// Hamburguer.id = "22"

console.log(Hamburguer);
