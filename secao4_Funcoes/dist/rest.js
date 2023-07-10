"use strict";
function vendasTotal(...vendas) {
    console.log(`O total de vendas desse mês foram: ${vendas.length}`);
    return vendas;
}
function valorVendas(...vendas) {
    const tot = vendas.reduce((acum, courrent) => {
        let qtd = acum + courrent;
        return qtd;
    }, 0);
    console.log(tot);
}
valorVendas(10, 20, 30, 50);
function mostrarNomes(...nomes) {
    nomes.map((nomes) => console.log(nomes));
}
