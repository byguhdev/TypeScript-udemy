// Type Enum
/* 
enum é um tipo de dado que permite definir um conjunto de valores nomeados. 
*/
enum DesignColor {
  white = "#FFFFFF",
  black = "#000000",
  green = "#00FF00",
  blue  = "#0000FF",
}

//console.log(DesignColor.black);
//console.log(DesignColor.green);

enum StatusUser {
    inativo,
    suspenso,
    ativo
}

console.log(StatusUser.inativo);
console.log(StatusUser.ativo);
console.log(StatusUser.suspenso);