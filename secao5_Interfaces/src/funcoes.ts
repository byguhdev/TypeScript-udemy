interface Cursos {
    id: string;
    nome: string;
    preco: number;

    // Nome    Parametros        Retorno
    promocao: (preco: number) => void
}

/* const newCourse: Cursos = {
    id: "1",
    nome: "TypeScript",
    preco: 139.9,
    promocao: (preco: number): void => {
        console.log(`Por apenas: ${preco}`);
    }
}
newCourse.promocao(27.9); */

interface Somar {
    (n1: number, n2: number): number;
}

let somaProps: Somar = (n1: number, n2:number) => {
    console.log('Resultado da soma: ', n1 + n2);
    return n1 + n2;
}

somaProps(12, 21);