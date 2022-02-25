

function calculaMultiplos() {
    let inputMenor = document.querySelector('#txt1');
    let inputMaior = document.querySelector('#txt2');
    let menorNumero = Number(inputMenor.value);
    let maiorNumero = Number(inputMaior.value);
    let res2 = document.querySelector('.res2');
    let res3 = document.querySelector('.res3');
    let contadorDe2 = 0;
    let contadorDe3 = 0;

    if (menorNumero == '' || maiorNumero == '') {
        alert('Insira um número!');
    } else if (menorNumero > maiorNumero) {
        alert('O valor mínimo deve ser menor que o valor máximo!')
    } else if (menorNumero < 0 || maiorNumero > 100) {
        alert('Número inválido!');
    } else {
        for (let i = menorNumero; i <= maiorNumero; i++) {

            if (i % 2 == 0) {
                contadorDe2 = contadorDe2 + 1;
                res2.innerHTML = `Temos ${contadorDe2} múltiplos de 2.<br>`;
            }
            if (i % 3 == 0) {
                contadorDe3 = contadorDe3 + 1;
                res3.innerHTML = `Temos ${contadorDe3} múltiplos de 3.<br>`;
            }
        }
    }
}



