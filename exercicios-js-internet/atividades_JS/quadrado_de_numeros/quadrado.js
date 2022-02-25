const numbers = [ 
    2,4,6,8,10
]

function calculaQuadrado (numbers) {
    for( var posicao = 0; posicao < numbers.length; posicao++ ) {
        console.log("O quadrado de " + numbers[posicao] + " é " + numbers[posicao]*numbers[posicao] + ".");
    }
}

calculaQuadrado(numbers)