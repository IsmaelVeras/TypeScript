// Crie uma função que recebe dois números e uma operação matemática 
// (soma, subtração, multiplicação ou divisão)
// e realiza o cálculo com base na operação informada

function calcular(n1: number, n2: number, operacao: 'soma' | 'subtracao' | 'multiplicacao' | 'divisao' ): number {
  switch (operacao) {
    case 'soma': 
      return n1 + n2
    case 'subtracao': 
      return n1 - n2
    case 'multiplicacao': 
      return n1 * n2
    case 'divisao': 
      if(n2 === 0) {
        throw new Error('Divisão por zero não é permitida')
      }
      return n1 / n2
    default: 
      throw new Error('Operação inválida!')
  }
}

console.log(calcular(10, 5, 'soma'));           // 15
console.log(calcular(10, 5, 'subtracao'));      // 5
console.log(calcular(10, 5, 'multiplicacao'));  // 50
console.log(calcular(4, 2, 'divisao'));        // 2
