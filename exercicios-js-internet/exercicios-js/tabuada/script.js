let res = document.querySelector('#res');
let opcoes = document.querySelector('#opcoesDeNumeros');

//Criando as opções através de JS
for (let c = 0; c <= 10; c++) {
    let itens = document.createElement('option');
    itens.append(c);
    opcoes.appendChild(itens);
}

//Escutando a opção selecionada
var opcaoSelecionada;
opcoes.addEventListener('change', function () {
    opcaoSelecionada = opcoes.value;
})

//Fazendo a tabuada da opção selecionada
function tabuada() {
    res.innerHTML = ''
    for (let c = 0; c <= 10; c++) {
        let resultados = (`${opcaoSelecionada} x ${c} = ${opcaoSelecionada*c}`);
        res.innerHTML += resultados + '<br>';
    }
}
