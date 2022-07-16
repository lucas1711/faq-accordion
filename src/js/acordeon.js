// querySelectorAll ele seleciona varios items 
const itensPerguntasRespostas = document.querySelectorAll(".item")



itensPerguntasRespostas.forEach(function (item) {
    item.addEventListener("click", function () {
        // ja o querySelector seleciona um item
        const itemAtivoAtual = document.querySelector(".ativo")

        if (itemAtivoAtual) {
            itemAtivoAtual.classList.remove("ativo")
        }

        item.classList.add("ativo")
    });
});





