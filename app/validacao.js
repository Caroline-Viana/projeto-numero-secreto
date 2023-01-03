function verificaChute(chute) {
    const numero = +chute;
    //Number.isNaN é para ver se oq foi falado é realmente um número
    if (numeroForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if (numeroNaoEsperado(numero)) {
        elementoChute.innerHTML += `<div>O número secreto precisa estar entre ${menorValor} e ${maiorValor} </div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button
        `
    }else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }
}

function numeroForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroNaoEsperado(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id =='jogar-novamente') {
        window.location.reload()
    }
})