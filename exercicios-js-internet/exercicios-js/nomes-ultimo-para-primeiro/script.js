function Nomes() {
    let nomes = document.querySelector("#txt1").value;
    let res = document.querySelector('#res');


    if (nomes == '') {
        alert('Insira os nomes!')
    } else {
        nomes = nomes.split(" ");
        for (let c = nomes.length-1; c >= 0; c--) {
            let nomesInvertidos = `${nomes[c]} `;
            res.textContent += nomesInvertidos;
            console.log(nomesInvertidos);
            console.log(nomes.length);
        }
    }
}