let id;
let nome;
function alterarStatus(id){

    const jogo  = document.getElementById(`game-${id}`);
    const botao = jogo.querySelector("a");
    const img   = jogo.querySelector("div");


    if(botao.classList.contains("dashboard__item__button--return")){
        botao.classList.remove("dashboard__item__button--return");
        botao.innerHTML ="Alugar";

        img.classList.remove("dashboard__item__img--rented");

    }else{
        botao.classList.add("dashboard__item__button--return");
        botao.innerHTML = "Devolver";

        img.classList.add("dashboard__item__img--rented")
    }


}
