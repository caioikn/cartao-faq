const perguntas = document.querySelectorAll('.pergunta-caixa');

perguntas.forEach(pergunta => {
    pergunta.addEventListener('click', (event) => {
        if (pergunta.classList.contains('ativo')) {
            pergunta.classList.remove('ativo');
        } else {
            perguntas.forEach(caixa => caixa.classList.remove('ativo'));
            pergunta.classList.add('ativo');
        }
    });
});

window.addEventListener('resize', () => {
    const imagem = document.querySelector('#imagem');
    const detalhe = document.querySelector('#detalhe');
    const largura = window.innerWidth;

    if(largura >= 1440) {
        imagem.src = '../images/illustration-woman-online-desktop.svg';
        detalhe.src = '../images/bg-pattern-desktop.svg';
    } else {
        imagem.src = '../images/illustration-woman-online-mobile.svg';
        detalhe.src = '../images/bg-pattern-mobile.svg';
    }
});
