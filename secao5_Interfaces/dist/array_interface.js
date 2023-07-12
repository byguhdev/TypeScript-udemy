"use strict";
let Programmer = {
    id: "1",
    nome: "Zé da manga",
    languages: ["PHP", "JS", "TypeScript"],
};
let backend = {
    tecnologias: [
        {
            nome: "Node",
            descricao: "É um ambiente de tempo de execução JavaScript multiplataforma e de código aberto.",
        },
        {
            nome: "PHP",
            descricao: "Rápido, flexível e pragmático, o PHP alimenta tudo, desde o seu blog até os sites mais populares do mundo.",
        },
    ],
};
for (let nomes of backend.tecnologias) {
    console.log(nomes);
}
