"use strict";
// Propiedade Opcional
const novoUser = {
    nome: "Henrique",
    email: "rik1234@gmail.com",
    cpf: "033.132.233-00",
    telefone: 71992345678,
};
// console.log(novoUser);
function newUserI(props) {
    console.log(props.email);
}
newUserI({
    nome: "João",
    email: "joãozinho@gmail.com",
    cpf: "123.123.123-32",
});
// Simbolo de definição opcional em ts -> `?`
