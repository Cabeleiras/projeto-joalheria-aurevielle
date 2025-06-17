document.addEventListener('DOMContentLoaded', () => {
	const form = document.getElementById('loginForm');

	form.addEventListener('submit', function(event) {
		event.preventDefault();

		const email = document.getElementById('email').value;
		const senha = document.getElementById('senha').value;


		fetch('http://localhost:8080/cadastrousuario/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email,
				senha
			})
		})
			.then(response => {
				if (response.ok) {
					return response.json();
				} else if (response.status === 401) {
					throw new Error('Email ou senha inválidos.');
				} else {
					throw new Error('Erro na autenticação.');
				}
			})
			.then(usuario => {
				// Aqui você pode redirecionar para a página de perfil, por exemplo:
				window.location.href = '../pages/perfilUsuario.html';
				// Também pode armazenar dados no localStorage/sessionStorage, se quiser
				localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
			})
			.catch(error => {
				alert(error.message);
			});
	});
});

function viewPassword() {
	const password = document.getElementById('senha');
	const btnPassword = document.getElementById('btn-view-password');

	if (password.type == 'password') {
		password.type = 'text';
		btnPassword.className = 'fa-solid fa-eye';
	} else {
		password.type = 'password';
		btnPassword.className = 'fa-solid fa-eye-slash';
	}
}

