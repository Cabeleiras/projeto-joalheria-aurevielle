// Alterna a visibilidade do menu drop-down ao clicar
document.querySelector('.dropbtn').addEventListener('click', function (event) {
    event.preventDefault();
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
});


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

document.addEventListener('DOMContentLoaded', () => {
    // Tenta pegar os dados do usuário armazenados no localStorage
    const usuarioJson = localStorage.getItem('usuarioLogado');

    const dropdownContent = document.querySelector('.dropdown-content')
	
	const usuario= JSON.parse(usuarioJson);

    if (!usuarioJson) {
    } else {
        document.getElementById("entrar").remove();
        document.getElementById("cadastrar").remove();

        dropdownContent.innerHTML = `
    <a href="../perfilUsuario.html">Perfil</a>
    <a id="sair">Sair</a> 
    `;
	if (usuario.tipoUsuario.idTipoUsuario == 1) {
		dropdownContent.innerHTML += `
	<a href="cadastroProduto.html">Cadastrar Produto</a>	
	`
		}
    }

    document.getElementById('sair').addEventListener('click', () => {
        localStorage.removeItem('usuarioLogado');
        window.location.href = '../paginaLogin.html';
    });
});
