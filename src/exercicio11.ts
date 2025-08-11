type calculaPerimetroType = {
  lado: number
}

function calcularPerimetroQuadrado({lado}: calculaPerimetroType): number {
  return lado * 4;
}

const perimetro = calcularPerimetroQuadrado({
  lado: 16
});
console.log(`Área do perímetro é: ${perimetro}`);
