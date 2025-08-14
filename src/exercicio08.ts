// Crie uma função que recebe dois números e retorna a divisão entre eles
// Caso não seja possivel realizar a divisão, a função deve retornar um erro

function dividir(n1: number, n2: number) {
  const result = n1 / n2
  if (result) {
    return "A divisão dos dois números é: " + result
  } else {
    return "Erro ao fazer a divisão"
  }
}

console.log(dividir(20, 10))
