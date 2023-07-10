// Interfaces

// Conjunto de dados (um padrão) para descrever a estrutura de um objeto.

interface LojaProps {
  nome: string;
  endereco: string;
  status: boolean;
}

const loja1: LojaProps = {
  nome: "Magazine Baiana",
  endereco: "Rua Marechal Deodoro Fonseca",
  status: true,
};

//console.log(loja1);

function loja2({ nome, endereco, status }: LojaProps): void {
  console.log(`O nome da loja é: ${nome}`);
  console.log(`O endereço da loja é: ${endereco}`);
  console.log(`A loja está: ${status ? "Aberta" : "Fechada"}`);
}

loja2({ nome: "Baianão Moveis", endereco: "Rua 15 de novembro", status: true });
