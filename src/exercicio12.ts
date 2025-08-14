function calcularQuadrado(lado: number): { perimetro: number; area: number } {
  const perimetro = 4 * lado
  const area = lado * lado

  return { perimetro, area }
}

const Resultado = calcularQuadrado(8)
console.log(`Perímetro: ${Resultado.perimetro}`)
console.log(`Área: ${Resultado.area}`)
