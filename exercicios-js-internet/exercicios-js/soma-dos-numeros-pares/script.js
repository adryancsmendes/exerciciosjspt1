let res = document.querySelector('#res');

function somaDosPares(x){
    let soma = 0;
    for(let c = 2; c <= x; c += 2){                
          soma = soma + c;
    }
    return soma;
}

res.innerHTML += (somaDosPares(100))