//Função cálculo média de 3 notas
let nota1 = parseInt(prompt('Digite a nota 1'));
console.log(nota1);

let nota2 = parseInt(prompt('Digite a nota 2'));
console.log(nota2);

let nota3 = parseInt(prompt('Digite a nota 3'));
console.log(nota3);

function calculaNotas (nota1,nota2,nota3) {
    let media = (nota1+nota2+nota3)/3
    document.write('A sua média é ' + media + '.<br><br>');
    document.write('FIM');
}

calculaNotas(nota1,nota2,nota3)

//FIM