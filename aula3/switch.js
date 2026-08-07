let diaNum = 30;

let diaString;

switch (diaNum) {
    case 1:
        diaString = "Domingo";
        break;
    case 2:
        diaString = "Segunda";
        break;
    case 3:
        diaString = "Terça";
        break;
    case 4:
        diaString = "Quarta";
        break;
    case 5:
        diaString = "Quinta";
        break;
    case 6:
        diaString = "Sexta";
        break;
    case 7:
        diaString = "Sábado";
        break;
    default:
        diaString = "Inválido";
}

console.log(diaString);



let mesNum = 0;


let mensagem;

switch (mesNum) {
    case 1:
        mensagem = "Estamos em Janeiro!";
        break;
    case 2:
        mensagem = "Estamos em Fevereiro!";
        break;
    case 3:
        mensagem = "Estamos em Março!";
        break;
    case 4:
    case 5:
    case 6:
        mensagem = "Estamos no segundo trimestre!";
        break;
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
        mensagem = "Estamos no segundo semestre!";
        break;
    default:
        mensagem = "mês inválido";
}

console.log(mensagem);

