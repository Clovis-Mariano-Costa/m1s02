let idade = 25;

if ( idade >= 16 ) {
    if ( idade > 59 || idade < 18 ) {
        console.log( "Votação opcional" );
    } else {
        console.log( "Votação obrigatória" );
    }
} else {
    console.log( "Votação não permitida" );
}

if (idade < 16) {
    console.log("Proibido.");
} else if (idade < 18 || idade >= 60) {
    console.log("Opcional.");
} else {
    console.log("Obrigatório.");
}
