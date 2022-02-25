function maiorNumero() {
    let n1 = document.querySelector('#txt1');
    let n2 = document.querySelector('#txt2');
    let n3 = document.querySelector('#txt3');
    let res = document.querySelector('#res');

    res.innerHTML = ''
    if (n1.value.length == '' || n2.value.length == '' || n3.value.length == '') {
        alert('Insira os números!');
    } else {
        let num1 = Number(n1.value);
        let num2 = Number(n2.value);
        let num3 = Number(n3.value);
        res.innerHTML += 'O maior n° é: ' + Math.max([num1], [num2], [num3]) + '<br>';
        res.innerHTML += 'O menor nº é: ' + Math.min([num1], [num2], [num3]);
    }
}