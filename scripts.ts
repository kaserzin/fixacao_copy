function calcularGasto(): void {
    const distanciaInput = document.getElementById('distancia') as HTMLInputElement | null;
    const precoCombustivelInput = document.getElementById('precoCombustivel') as HTMLInputElement | null;
    const resultadoElement = document.getElementById('resultado') as HTMLElement | null;

    if (distanciaInput && precoCombustivelInput && resultadoElement) {
        const distancia: number = parseFloat(distanciaInput.value);
        const consumoPorKm: number = 14;
        const precoCombustivel: number = parseFloat(precoCombustivelInput.value);
        const gasto: number = (distancia / consumoPorKm) * precoCombustivel;
        resultadoElement.innerText = `João gastará R$${gasto.toFixed(2)} para percorrer ${distancia}Km.`;
    }
}

function calcularComprimento(): void {
    const palavraInput = document.getElementById('palavra') as HTMLInputElement | null;
    const resultadoElement = document.getElementById('resultado') as HTMLElement | null;

    if (palavraInput && resultadoElement) {
        const palavra: string = palavraInput.value;
        const comprimento: number = palavra.length;
        resultadoElement.innerText = `A palavra "${palavra}" tem ${comprimento} caracteres.`;
    }
}

function calcularValor(): void {
    const comprimentoInput = document.getElementById('comprimento') as HTMLInputElement | null;
    const alturaInput = document.getElementById('altura') as HTMLInputElement | null;
    const resultadoElement = document.getElementById('resultado') as HTMLElement | null;

    if (comprimentoInput && alturaInput && resultadoElement) {
        const comprimento: number = parseFloat(comprimentoInput.value);
        const altura: number = parseFloat(alturaInput.value);
        const area: number = comprimento * altura;
        const valorMetroQuadrado: number = 300;
        const valorTotal: number = area * valorMetroQuadrado;
        resultadoElement.innerText = `O terreno de ${comprimento}m de comprimento por ${altura}m de altura, que tem ${area}m², vale R$${valorTotal.toFixed(2)}.`;
    }
}
