var filtro = document.querySelector("#filtrar-tabela");
// NOTE: Filtra conteudo de um input para pegar os dados de um cliente
filtro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente");
    // NOTE: Se não houve nenhum nome digitado exibe todos
    if(this.value.length > 0){
        // NOTE: Compara com o nome das TR
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            // Expressao regular para encontrar uma pessoa com aquelas palavras
            var expressao = new RegExp(this.value,"i");
            if(!expressao.test(nome)){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            };
        };
    }else{
        for (let i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    };
});