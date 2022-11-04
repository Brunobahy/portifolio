var mostraMais = document.querySelector(".mostraMais");

function overflow() {
    for(i=0; i<todasFormacoes.length;i++){
        formacao = todasFormacoes[i];
        
        if(i > 9){
            formacao.classList.add("overflow");
        }
    }
}

mostratudo = true

mostraMais.addEventListener("click",function() {


    if(mostratudo){
        todasFormacoes.forEach(function(formacao){
            formacao.classList.remove("overflow")
            mudaTexto(".mostraMais__flecha", "˄")
            mudaTexto(".mostrarMais__botao", "Mostrar Menos")
        })
    }else{
        overflow()
        mudaTexto(".mostraMais__flecha", "˅")
        mudaTexto(".mostrarMais__botao", "Mostrar Mais")
    }
    mostratudo = !mostratudo            
})

overflow()



function mudaTexto(tag,conteudo){
    var tags = document.querySelectorAll(tag);
    
    tags.forEach((tag)=>{
        tag.textContent = conteudo;        
    })
    
}