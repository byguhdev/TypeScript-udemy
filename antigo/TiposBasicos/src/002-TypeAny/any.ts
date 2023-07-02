// any == Qualquer coisa
// Utilize apenas em último caso.
function showMessage(msg: any) {
  return msg;
}

console.log(showMessage([1, 23, 4, 4, 4, 5]));
console.log(showMessage('Olá mundo'));
console.log(showMessage(1));
console.log(showMessage(true));
