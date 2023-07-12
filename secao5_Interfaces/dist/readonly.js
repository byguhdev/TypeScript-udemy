"use strict";
// Readonly --> Apenas leitura
let Hamburguer = {
    id: "1",
    nome: "X bacon",
    descricao: "Novo hamburguer com 4x bacon"
};
// Não é possível atribuir a 'id' porque é uma propriedade de somente leitura.
// Hamburguer.id = "22"
console.log(Hamburguer);
