var idade = 66

console.log(`Você tem ${idade} anos.`)

if (idade < 16) { //Estrutura aninhadas
    console.log("Não vota.")
} else if (idade < 18 || idade > 64) {
    console.log("Voto opcional.")
} else {
    console.log("Voto obrigatório.")
}
