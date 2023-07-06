// Type Unknown

/* 
O tipo unknown em TypeScript é usado para representar um valor cujo tipo é desconhecido durante o tempo de compilação.
*/

let total: unknown;

total = 121;
//total = "STR";
//total = true;
console.log(total);

let media: any;
media = total;
console.log(media);


/* 
? Tipo unknown so pode referenciar a ele mesmo ou ao tipo any
let soma2: number = 0;
soma2 += total + 10;
*/
