let nota1 = 7;
let nota2 = 9;

let somatorioNotas = nota1 * 60 + nota2 * 40;
const mensagemSomatorioNotas = "Somatório das notas: " + somatorioNotas;

console.log(mensagemSomatorioNotas);

let mediaAluno = somatorioNotas / 100;

const mensagemMedia = "Média: " + mediaAluno;

console.log(mensagemMedia);

let descontoNota = 0.5;

let mediaFinal = mediaAluno - descontoNota;

const mensagemMediaFinal = "Média final: " + mediaFinal;

console.log(mensagemMediaFinal);

let ehPar = mediaFinal % 2 == 0;

if (ehPar) {
    console.log("Média é par!");
} else {
    console.log("Média é ímpar");
}


let idade = 29;

//idade = idade + 1;
idade += 1;
console.log(idade);

//idade = idade - 2;
idade -= 2;
console.log(idade);

//idade = idade * 3;
idade *= 3;
console.log(idade);

//idade = idade / 2;
idade /= 2;
console.log(idade);

//idade = idade % 3;
idade %= 3;
console.log(idade);


idade = 35;
console.log(idade);

//incremento
console.log(idade++);
console.log(++idade);


//decremento
console.log(idade--);
console.log(--idade);
