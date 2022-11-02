var listaFormacao = document.querySelector(".formacao__lista")
var formulario = document.querySelector(".formulario")
var botao = formulario.querySelector(".formulario__botao");

var novasFormacoes = [];

botao.addEventListener("click", (event)=>{
    event.preventDefault();
    
    var dados = extraiDados();

    console.log(verificaDuplicata(dados))
    
    verificaDuplicata(dados);
    
    if(mensagem.length > 0){

        var erro = document.querySelector(".formulario__mensagem")
        
        erro.textContent = mensagem;
        return;
    }
    
    var formacao = criaFormacao(dados);
    listaFormacao.appendChild(formacao);
    
    
    formulario.reset()
})

/* tira os dados e armazena no objeto formação  */

function extraiDados(){
    
    /*formulario é a variavel no inicio da pagina*/
    
    formacao = {
        nome: formulario.nome.value,
        texto: formulario.texto.value,
        link: formulario.link.value
    }

    return formacao;
}

function criaFormacao(formacao){

    var novaFormacao = criaElemento("li","formacao__item",);

    var imagem = criaElemento("div","formacao__item--imagem","",formacao.link)
    var nome = criaElemento("h3","formacao__item--nome",formacao.nome);
    var texto = criaElemento("p","formacao__item--texto",formacao.texto);
    var botaoEnviar = criaElemento("input","formacao__item--visitar","Visualizar")

    novaFormacao.appendChild(imagem)
    novaFormacao.appendChild(nome)
    novaFormacao.appendChild(texto)
    novaFormacao.appendChild(botaoEnviar)
    return novaFormacao;
}


function criaElemento(tag,clase,conteudo,link){

    var elemento = document.createElement(tag);
    if(tag == "input"){
        elemento.type = "button";
        elemento.value = conteudo;
    }else{
        elemento.textContent = conteudo
        elemento.style.backgroundImage = "url("+link+")";
    }   

    elemento.classList.add(clase)
    
    return elemento;
}


function verificaDuplicata(dados){

    mensagem = []

    if(validaNome(dados.nome) == false){
        mensagem.push("Nome Duplicado");
    }
    if(validaTexto(dados.texto) == false){
        mensagem.push("Texto Duplicado");
    }
    console.log(mensagem)
    return mensagem;
}

function validaNome(nome){
    
    var formacaoNomes = listaFormacao.querySelectorAll(".formacao__item--nome");
    
        for(var i = 0;i<formacaoNomes.length;i++){
            
            nomeAtual = formacaoNomes[i].textContent;
            
            if(nomeAtual == nome){
                return false;
            }
            
        }
}

function validaTexto(texto){
    var formacaoTextos = listaFormacao.querySelectorAll(".formacao__item--texto");

    for(var i = 0; i < formacaoTextos.length; i++ ){

        var textoAtual = formacaoTextos[i].textContent;

        if(textoAtual == texto){
            return false
        }

    }


}