var tema = false;
var botaoDark = document.querySelector("#botao-dark");


botaoDark.addEventListener("click", function () {
    tema = !tema
    verificaTags(".container-cinza", "claro");
    verificaTags("body", "escuro");
    verificaTags(".formacao__item", "fundoClaro");
    verificaTags(".projetos__itens", "fundoClaro")
    mudaCorTexto("p");
    mudaCorTexto("h3")

})

function verificaTags(classe, cor) {
    tags = document.querySelectorAll(classe)

    tags.forEach(function (tag) {
        trocaFundo(tag, cor);
    })



}

function trocaFundo(tag, cor) {

    if (tema) {
        tag.classList.add(cor);
        botaoDark.style.color = "white";
    } else {
        tag.classList.remove(cor)
        botaoDark.style.color = "#070F21"
    }

}

function mudaCorTexto(tagtexto) {
    var textos = document.querySelectorAll(tagtexto)

    textos.forEach(function (texto) {

        if (tema) {
            texto.classList.add("fonteBranco")
        } else {
            texto.classList.remove("fonteBranco")
        }
    })

}