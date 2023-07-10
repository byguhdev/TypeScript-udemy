// Operador Rest.

function vendasTotal(...vendas: number[]) {
  console.log(`O total de vendas desse mês foram: ${vendas.length}`);
  return vendas;
}


//vendasTotal(10, 4, 2, 20, 30);

function valorVendas(...vendas: number[]) {
  const tot = vendas.reduce((acum: number, courrent:number):number => {
    let qtd = acum + courrent;
    return qtd
},0)
console.log(tot);

}
valorVendas(10,20,30,50);

function mostrarNomes(...nomes: string[]) {
  nomes.map((nomes) => console.log(nomes));
}

// mostrarNomes("Jó", "Farias", "Clara", "Osvald");
