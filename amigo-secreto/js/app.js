let amigos = [];


function adicionar() {
    const listAmigos = document.querySelector("#lista-amigos");
    const nomeAmigo = document.querySelector("input#nome-amigo");
    

    if (nomeAmigo.value === "") {
        alert("coloque ao menos um nome por favor.");
        return;
    } else if(amigos.includes(nomeAmigo.value)){
        alert("este é um nome repetido, insira algo para diferenciar.");
        return;
    } else {
        amigos.push(nomeAmigo.value);
        listAmigos.innerHTML = amigos;
    }
}


function sortear() {

    embaralha(amigos);
    let sorteio = document.getElementById("lista-sorteio");
    if (amigos.length <= 2) {
        alert("insira no minimo 3 pessoas para o sorteio");
        return;
    }else{
            for (let i = 0; i < amigos.length; i++){
                
                    if (i == amigos.length - 1) {
                        sorteio.innerHTML += amigos[i] + " --> " + amigos[0] + "<br>";
                    } else {
                        sorteio.innerHTML += amigos[i] + " --> " + amigos[i + 1] + "<br>";
                    }
                }
        }

}



function reiniciar(){
    amigos = [];
    const listAmigos = document.querySelector("#lista-amigos");
    const nomeAmigo = document.querySelector("input#nome-amigo");
    let sorteio = document.getElementById("lista-sorteio");
    
    sorteio.innerHTML = "";
    listAmigos.innerHTML = "";
    nomeAmigo.innerHTML = "";
    nomeAmigo.value = "";
    
    
}



function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}