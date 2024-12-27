let totalGeral = 0;
document.querySelector("#lista-produtos").innerHTML = "";
document.querySelector("#valor-total").innerHTML = "R$ 0";
document.querySelector("#quantidade").innerHTML = 0;

function adicionar() {
    let produto = document.querySelector("#produto").value;
    let nomeProduto = produto.split("-")[0];
    let valorUnitario = produto.split("R$")[1];
    let quantidade = document.querySelector("#quantidade").value;
    
    
    let preco = quantidade * valorUnitario;
    let listaProdutos = document.querySelector("#lista-produtos");

    if (quantidade>= 1 && preco >= 1) {
        listaProdutos.innerHTML+=`<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade>=1?quantidade:0}x</span> ${nomeProduto} <span class="texto-azul">R$${preco>=1?preco:0}</span>
        </section>`;

        totalGeral = totalGeral + preco;    
        let campoTotal = document.querySelector("#valor-total");    
        campoTotal.innerHTML = `R$ ${totalGeral}`;

    }
    else {
        alert("insira o valor ou preencha os campos coretamente.")
    }
    document.querySelector("#quantidade").value = null;
    
    
    
}




function limpar() {
    totalGeral = 0
    document.querySelector("#lista-produtos").innerHTML = "";
    document.querySelector("#valor-total").innerHTML = "R$ 0";
    document.querySelector("#quantidade").innerHTML = null;
}