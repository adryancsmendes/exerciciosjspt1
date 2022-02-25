function calculaSalario() {
    let salIni = document.querySelector('#txt1');
    let anoIni = document.querySelector('#txt2');
    let res = document.querySelector('#res');
    let ano = new Date();
    let anoAtual = ano.getFullYear();
    if (salIni.value == '' || anoIni.value == ''){
        alert('Preencha os campos corretamente!')
    }else if(salIni.value < 1000){//Considerando um salário minimo de mil reais.
        alert('Salário inválido!')
    }else if (anoIni.value >= anoAtual){
        alert('Ano inválido');
    }else{
        let salario = Number(salIni.value);
        let anoContratacao = Number(anoIni.value);
        let percentualDeAumento = 0.015;
        let salAtual = salario + salario*percentualDeAumento;
        let anosNaEmpresa = anoAtual - anoContratacao;
        for(let c = 1; c<=anosNaEmpresa;c++){
            percentualDeAumento = percentualDeAumento*2;
            salAtual = salAtual + (salAtual*percentualDeAumento);
            res.innerHTML = salAtual.toFixed(2);
        }
    }
}

