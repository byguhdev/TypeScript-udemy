class MeuHello {
  getHello() {
    return 'Hello World TypeScript';
  }
}

const instancia = new MeuHello();
const data = new Date();
console.log(
  `Bem vindo ao modulo de TypeScript esse é o meu: '${instancia.getHello()}' no dia '${data.getDate()}'`,
); // Bem vindo ao modulo de TypeScript esse é o meu: 'Hello World TypeScript' no dia '6'
