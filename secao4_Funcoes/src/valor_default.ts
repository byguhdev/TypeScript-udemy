// Como deixar um valor por default ou deixar ele opcional

function cadastro(nome: string, email: string, idade?: number)
{
  let data = { nome, email, idade };
  console.log(data);  
}

cadastro("Matus", "matosao@gmail.com", 21);

const Store = (nome: string, email:string, status=false): boolean =>
{
    console.log("Estatus atual da loja é: ", status);

    return status;
}


Store("Burguer T","burgeurt@gmail.com");