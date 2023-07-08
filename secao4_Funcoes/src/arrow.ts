// Arrow Function

const arrow = (url: string): string =>{
    console.log("this url: ", url);
    return url;
}

console.log(arrow('https://fakeapi.com.br'));


/* const Relogio = () => {
    let data = new Date();
    console.log(data.toLocaleTimeString());
}

const Clock = setInterval(()=>{
    console.clear();
    let data = new Date();
    console.log(data.toLocaleTimeString());
}, 1000) */