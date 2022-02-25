

function calculaFatorial() {
    let numTxt = document.querySelector('#txt1');
    let num = Number(numTxt.value);
    let res = document.querySelector('.res');

    res.innerHTML = '';
    if (num == '') {
        alert('Insira um número válido!');
    } else {
        let fat = 1;
        for (let i = 1; i <= num; i++) {
            fat = fat * i;
            console.log(fat);
        }
    }


}
