// Exercicio radar de velocidade
// A cada 5 km acima do limite você ganha 1 ponto
// Math.Floor()
// CAso pontos maior que 12 = "carteira Suspendida"

verificarVelocidade(150);

function verificarVelocidade (velocidade) {
    const velocidadeMaxima =70;
    const kmPorPonto = 5;
    if (velocidade <= velocidadeMaxima) {
        console.log('OK');
    }
    else{
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto));
        if (pontos >= 12)
            console.log ('Carteira suspensa')
        else
            console.log (pontos + ' Pontos');

    }
}