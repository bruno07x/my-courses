var pacientes = document.querySelectorAll("#tabela-pacientes");
pacientes.forEach(function(paciente){
    // NOTE: Captura evento de duplo clique e remove
    // Acessa a tabela inteira e remove um dos flihos
    paciente.addEventListener("dblclick", function(event){
        event.target.parentNode.classList.add("remove");
        // NOTE: Aguarda um tempo para entao executar a acao
        setTimeout(function(){
            event.target.parentNode.remove();
        }, 500);
    });
});