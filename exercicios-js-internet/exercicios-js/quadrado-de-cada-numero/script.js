function media() {
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
        res.innerHTML = (`Os quadrados desses números,
         respectivamente, são:<br> ${num1**2}, ${num2**2} e ${num3**2}.`);
    }
}