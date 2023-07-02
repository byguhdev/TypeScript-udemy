const objetoA: {
  // readonly --> é um modificador em TypeScript que torna uma propriedade imutável após a sua inicialização.
  readonly ChaveD: string;
  chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor de A',
  chaveB: 'Valor de B',
  ChaveD: 'Não muda',
};

objetoA.chaveA;
objetoA.chaveB = 'Outro valor';

console.log(objetoA);
