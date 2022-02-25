function datas() {
    let data = document.querySelector("#txt1").value;
    let res = document.querySelector('#res');


    if (data == '') {
        alert('Insira a data!')
    } else {
        data = data.split("/");
        for (let c = 0; c <= data.length-1; c++) {
            let dataSeparada = (data[c]);
            res.innerHTML += `${dataSeparada} <br>`;
        }

    }
}