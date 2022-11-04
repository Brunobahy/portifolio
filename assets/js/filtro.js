
var campoFiltro = document.querySelector("#filtro");

campoFiltro.addEventListener("input",function(){
    var formacaoNome = document.querySelectorAll(".formacao__item--nome");

    for(i=0; i < formacaoNome.length; i++ ){
        
        var formacao = formacaoNome[i].parentNode; 
        var nome = formacaoNome[i].textContent;
        var expressao = new RegExp(this.value,"i")

        if(expressao.test(nome)){
            formacao.classList.remove("esconde")
        }else{
            formacao.classList.add("esconde")
        }
    }

})


var todasFormacoes = document.querySelectorAll(".formacao__item");
var numero = document.querySelector("[data-formacao]")

numero.textContent = todasFormacoes.length