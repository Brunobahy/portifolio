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


/*
        <form action="" class="formulario">
            <h2 class="formulario__titulo">Inserir formação</h2>
            <span class="formulario__mensagem"></span>
            <div class="formulario__grupo nome">
                <label class="formulario__nome" for="nome">Formação:</label>
                <input class="label-comum" class="formulario__texto" type="text" title="nome" id="nome"
                    placeholder="Nome da formação">
            </div>
            <div class="formulario__grupo texto">
                <label class="formulario__nome" for="texto">Texto:</label>
                <input class="label-comum" type="text" id="texto" placeholder="Texto da formação">
            </div>
            <div class="formulario__grupo link">
                <label for="link" class="formulario__nome">Link:</label>
                <input class="label-comum" id="link" type="text" class="formulario__texto" placeholder="link aqui">
            </div>
            <button class="formulario__botao" type="button">Enviar</button>
        </form>
*/