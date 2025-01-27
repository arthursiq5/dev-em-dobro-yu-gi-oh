const cartoes = document.querySelectorAll('.cartao')
const btnAvancar = document.querySelector('.btn-avancar')
const btnVoltar = document.querySelector('.btn-voltar')
let indexCartaoAtual = 0

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao(indiceCartao) {
    cartoes[indiceCartao].classList.add("selecionado");
}

btnAvancar.addEventListener('click', (e) => {
    e.preventDefault();
    esconderCartaoSelecionado();
    indexCartaoAtual++;
    if (indexCartaoAtual >= cartoes.length) {
        indexCartaoAtual = 0;
    }
    mostrarCartao(indexCartaoAtual)
})

btnVoltar.addEventListener('click', (e) => {
    e.preventDefault();
    esconderCartaoSelecionado();
    indexCartaoAtual--;
    if (indexCartaoAtual < 0) {
        indexCartaoAtual = cartoes.length - 1;
    }
    mostrarCartao(indexCartaoAtual)
})
