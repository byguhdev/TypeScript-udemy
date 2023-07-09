"use strict";
function cadastro(nome, email, idade) {
    let data = { nome, email, idade };
    console.log(data);
}
cadastro("Matus", "matosao@gmail.com", 21);
const Store = (nome, email, status = false) => {
    console.log("Estatus atual da loja é: ", status);
    return status;
};
Store("Burguer T", "burgeurt@gmail.com");
