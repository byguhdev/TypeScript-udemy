// Void --> É um tipo especial que indica que uma função não retorna um valor específico.

function semRetorno(...arg: string[]): void {
  console.log(arg.join(' '));
}

const pessoa = {
  nome: 'Henrique',
  sobrenome: 'Barbosa',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Gustavo', 'Henrique');
pessoa.exibirNome();
