"use strict";
const Minecraft = {
    id: '0',
    nome: "Minecraft",
    descricao: "Minecraft é um jogo eletrônico dos gêneros sandbox e sobrevivência",
    plataforma: [
        "PC",
        "Xbox",
        "PS",
        "Nintendo Switch"
    ]
};
const MinecraftDLC = {
    id: '1',
    nome: "Minecraft - DLC 1.0.0",
    descricao: "Dificuldade aumentada, refatoração de mapas e armas",
    plataforma: [
        "PC",
        "Xbox",
        "PS",
        "Nintendo Switch",
        "MacOS"
    ],
    newContent: [
        "Modo multiplayer",
        "Servidores aprimorados",
        "Novos biomas",
        "Novas construções",
        "Suporte ao MacOS"
    ],
    // Referencia a constante Minecraft do game
    OriginGame: Minecraft
};
console.log(MinecraftDLC);
