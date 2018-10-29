var botaoAdd = document.querySelector("#buscar-paciente");
botaoAdd.addEventListener("click", function(){
    console.log("Click");
    //NOTE: Objeto JS responsavel por fazer requisicoes HTTP
    var xhr = new XMLHttpRequest();
    // NOTE: Configurando tipo de requisicao
    // necessario passar o metodo (GET, POST) usado e a url de destino
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");
        // NOTE: Pega o código do erro da requisicao HTTP
        if(xhr.status == 200){
            var response = xhr.responseText;
            // NOTE: Pega a string JSON e transforma em ARRAY
            var paciente = JSON.parse(response);
            erroAjax.classList.add("invisivel");
            paciente.forEach( function(e){
                addPacienteTabela(e);
            });
        }else{
            erroAjax.classList.remove("invisivel");
        }
    });
    // NOTE: Envia requisicao
    xhr.send();
});