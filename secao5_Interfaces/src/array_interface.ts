interface SkillsProps {
  id: string;
  nome: string;
  languages: string[];
}

let Programmer: SkillsProps = {
  id: "1",
  nome: "Zé da manga",
  languages: ["PHP", "JS", "TypeScript"],
};

// console.log(Programmer);

interface Languages {
  nome: string;
  descricao: string;
}

interface NomesTecs {
  tecnologias: Languages[];
}

let backend: NomesTecs = {
  tecnologias: [
    {
      nome: "Node",
      descricao:
        "É um ambiente de tempo de execução JavaScript multiplataforma e de código aberto.",
    },
    {
      nome: "PHP",
      descricao:
        "Rápido, flexível e pragmático, o PHP alimenta tudo, desde o seu blog até os sites mais populares do mundo.",
    },
  ],
};

for (let nomes of backend.tecnologias) {
    console.log(nomes);
}
