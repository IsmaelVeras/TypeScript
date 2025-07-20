// Crie uma função que recebe dois números e retorna a soma deles.
// Se a soma for negativa, exiba "Número negativo!".
// Caso contrário, exiba a soma.

function Soma(a: number, b: number) {
     const result = a + b;
     if (result >= 0) {
        console.log("A soma dos dois números é: " + result);
     } else {
        console.log("Número negativo!");
     }
}

Soma(2, 4);