// Alterna a visibilidade do menu drop-down ao clicar
document.querySelector('.dropbtn').addEventListener('click', function (event) {
    event.preventDefault();
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
});

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
	`;
		}
    }

    document.getElementById('sair').addEventListener('click', () => {
        localStorage.removeItem('usuarioLogado');
        window.location.href = '../pages/paginaLogin.html';
    });
});
