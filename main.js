const form = document.getElementById('form-agenda');
const contatos = [];
const numero= [];

let linhas = '';

form.addEventListener('submit',function(e){
    e.preventDefault();

    adiconaLinha();
    atualizaTabela();

});

function adiconaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato')

    if(contatos.includes(inputNomeContato.value)){
        alert(`O contato: ${inputNomeContato.value} já foi inserido`);
    }
    else{
        contatos.push(inputNomeContato.value);
        numero.push(parseFloat(inputNumeroContato.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}