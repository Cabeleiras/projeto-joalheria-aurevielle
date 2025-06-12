// Função para adicionar a classe 'visible' quando o elemento entra na tela
function scrollAnimation() {
    const elementos = document.querySelectorAll('.elemento-animado');

    elementos.forEach(elemento => {
        const distanciaTop = elemento.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (distanciaTop <= windowHeight * 0.8) { // Se o elemento estiver 80% visível na tela
            elemento.classList.add('visible');
        } else {
            elemento.classList.remove('visible');
        }
    });
}

// Adicionar o evento de scroll
window.addEventListener('scroll', scrollAnimation);

// Chamar a função para aplicar a animação já no carregamento da página
scrollAnimation();