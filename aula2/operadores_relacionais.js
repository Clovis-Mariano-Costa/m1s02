let idade = 18;

console.log(idade == "18"); //igualdade - valor
console.log(idade === "18"); //igualdade estrita - valor E tipo

console.log(idade != "18") // diferença - valor
console.log(idade !== "18"); //diferença estrita - valor E tipo

let possuiCNH = false;

if (idade >= 18 && possuiCNH) {
    console.log("pode dirigir");
} else {
    console.log("Não pode dirigir");
}

let nome = "João";


if (!nome) {
    console.log("Favor inserir o nome.");
}
