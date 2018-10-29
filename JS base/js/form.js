// NOTE: Aguarda acao do botao após click
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);
    var erro = validaPaciente(paciente);
    // NOTE: Verifica se há algum erro
    // Se erro maior que 0 ira ser exibido e saira imediatamente da funcao
    if(erro.length > 0){
        exibeErro(erro);
        return;
    }
    if(!validaPaciente(paciente)){
        console.log("Paciente invalido");
        // NOTE: Usando "return" sem um dado, sai imediatamente da funcao caso o paciente seja
        return;
    }
    addPacienteTabela(paciente);
    form.reset();
    var mensagemErro = document.querySelector("#mensagensErro");
    mensagemErro.innerHTML = "";
});

/*
##################
### FUNCTIONS ### 
##################
*/
function obtemPacienteDoFormulario(form) {
    // NOTE: Recebe um array de dados e cria um objeto paciente
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}
function addPacienteTabela(paciente){
    var pacienteTr = montaTr(paciente);
    console.log(pacienteTr);
    // NOTE: Adicionando paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

// NOTE: Monta a linha da tabela
function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

// NOTE: Monta os dados da tabela
function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;
    return td;
}

function validaPaciente(paciente){
    var erros = [];
    if(!validaPeso(paciente.peso)){
        erros.push("Peso invalido");
    }
    if(!validaAltura(paciente.altura)){
        erros.push("Altura invalida!");
    }
    if(paciente.nome.length == 0){
        erros.push("Nome não pode ser nulo");
    }
    if(paciente.gordura.length == 0){
        erros.push("Gordura não pode ser em branco.");
    }
    console.log(erros);
    return erros;
}

function exibeErro(erro){
    var ul = document.querySelector("#mensagensErro");
    // NOTE: Limpa o conteudo interno da UL
    ul.innerHTML = "";
    erro.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
