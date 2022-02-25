function qtdMaiorMenorIdade() {

    let res = document.querySelector('#res');
    let idades = document.querySelector("#txt1").value;
    idades = idades.split(" ");
    let maior = 0;
    let menor = 0;
    for (i = 0; i < idades.length; i++) {
        if (parseInt(idades[i]) >= 18) {
            maior++;
        } else {
            menor++;
        }
    }
    res.innerHTML = ("Maiores: " + maior + " - Menores: " + menor);
} 