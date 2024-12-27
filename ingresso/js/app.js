


function comprar() {
    const tipoIngresso = document.querySelector("#tipo-ingresso").value;
    const quantidade = document.querySelector("#qtd").value;
    let geral;
    
    if (tipoIngresso == "inferior") {

        let qtdInferior = document.querySelector("#qtd-inferior");

        if (parseInt(qtdInferior.innerHTML) >= parseInt(quantidade<=0?0:quantidade)) {
            geral = qtdInferior.innerHTML - quantidade;
            qtdInferior.innerHTML = geral.toString();
        } else {
            alert("os ingresos da cadeira inferior estão em falta :(");
        }

    } else if (tipoIngresso == "superior") {

        let qtdSuperior = document.querySelector("#qtd-superior");
        if (parseInt(qtdSuperior.innerHTML) >= parseInt(quantidade<=0?0:quantidade)) {
            geral = qtdSuperior.innerHTML - quantidade;
            qtdSuperior.innerHTML = geral.toString();
        }else{
            alert("os ingresos da cadeira superior estão em falta :(");
        }

    } else if (tipoIngresso == "pista") {

        let qtdpista = document.querySelector("#qtd-pista");
        if (parseInt(qtdpista.innerHTML) >= parseInt(quantidade<=0?0:quantidade)) {
            geral = qtdpista.innerHTML - quantidade;
            qtdpista.innerHTML = geral.toString();
        }else{
            alert("os ingresos da pista estão em falta :(");
        }

    } else {
        alert("selecione ao menos um dos campos")
    }
}