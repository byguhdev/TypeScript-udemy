// Type Alias conseguimos criar tipos mais poderoso, com mais informações do que tipos primitivos.

// Declarando os tipos
type Info = {
    id: number;
    nome: string;
    description?: string;
}

type Categoria = {
    tipo: string;
    quantidade: number;
}

type Produtos = Info & Categoria; // Produtos é a interseção (UNIÃO) entre Info e Categoria.

// Criando o Produto
const NovoProduto: Produtos = {
    id: 12,
    nome: "Teclado Mecanico",
    tipo: "Hardware",
    quantidade: 23,
    description: "Melhor teclado do mercado, toque suave e com maior precisão que a versão anterior."
}

console.log(NovoProduto);
