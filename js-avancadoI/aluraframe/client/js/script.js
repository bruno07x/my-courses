// NOTE: Array com dados capturados do form.
var formDados = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];
var tbody = document.querySelector('table tbody');
// NOTE: Captura do submit
document.querySelector(".form").addEventListener('submit', function(event){
    event.preventDefault();
    // NOTE: Criação do elemento HTML tr
    var tr = document.createElement('tr');
    formDados.forEach(function(campos){
        // NOTE: Criação do elemento HTML td
        var td = document.createElement('td');
        // NOTE: Atribui o valor
        td.textContent = campos.value;
        // NOTE: Adiciona à table row (tr) os table datas (td)
        tr.appendChild(td);
    });
    var tdVol = document.createElement('td');
    tdVol.textContent = formDados[1].value * formDados[2].value;
    tr.appendChild(tdVol);
    tbody.appendChild(tr);
    // NOTE: Reseta os valores
    formDados[0].value = '';
    formDados[1].value = 1;
    formDados[2].value = 0;
    formDados[0].focus();
});