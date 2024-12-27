

function sortear() {
    let De = parseInt(document.getElementById("de").value);
    let Ate = parseInt(document.getElementById("ate").value);
    let quantidade = parseInt(document.getElementById("quantidade").value);
    
    
    
    
    

    let sorteados = [];
    let numero;

    for (let i = 0; quantidade > i; i++){

        numero = obterNumeroAleatorio(De, Ate);
        
        while (sorteados.includes(numero)) {
        numero = obterNumeroAleatorio(De, Ate);
        }

        sorteados.push(numero);
    }

    let resposta = document.getElementById("resultado");
    
    resposta.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max)
    { 
       return Math.floor(Math.random() * (max - min + 1 )) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById("btn-reiniciar");
    if (botao.classList.contains("container__botao-desabilitado")) {
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    } else {
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }
}

function reiniciar(){
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("quantidade").value = "";
    document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}