function media() {
    let n1 = document.querySelector('#txt1');
    let n2 = document.querySelector('#txt2');
    let res = document.querySelector('#res');

    res.innerHTML = '';
    if (n1.value.length == '' || n2.value.length == '') {
        alert('Insira suas notas!');
    } else if (n1.value < 0 || n1.value > 10 || n2.value < 0 || n2.value > 10) {
        alert('Nota inválida!');
    }
    else {
        let nota1 = Number(n1.value);
        let nota2 = Number(n2.value);
        let media = (nota1 + nota2) / 2;
        if (media >= 6) {
            res.innerHTML = `Sua média foi ${media}, aprovado.`;
        } else {
            res.innerHTML = `Sua média foi ${media}, reprovado`;
        }
    }
}