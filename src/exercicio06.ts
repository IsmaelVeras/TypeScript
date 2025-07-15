// crie uma função que recebe uma variável e retorna seu tipo

function tipoVariavel(qualVariavel: any): string {
  return typeof qualVariavel
}

console.log(tipoVariavel("Olá Mundo!")) // String
console.log(tipoVariavel(42)) // Number