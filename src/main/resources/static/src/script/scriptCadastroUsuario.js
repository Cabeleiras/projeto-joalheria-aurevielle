document.getElementById("cadastroUsuarioForm").addEventListener("submit", async function (event) {
	event.preventDefault();

	const nomeUsuario = document.getElementById("nomeUsuario").value;
	const cpfUsuario = document.getElementById("cpfUsuario").value;
	const emailUsuario = document.getElementById("emailUsuario").value;
	const telefone = document.getElementById("telefoneUsuario").value;
	const dt_nascimento = document.getElementById("dt_nascimento").value;
	const senhaUsuario = document.getElementById("senhaUsuario").value;

	try {
		const response = await fetch("http://localhost:8080/cadastrousuario", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				nomeUsuario,
				cpf: cpfUsuario,
				email: emailUsuario,
				telefone,
				dataNascimento: dt_nascimento,
				senha: senhaUsuario,
				tipoUsuario: {
					idTipoUsuario: 2
				}
			}),
		})
			.then(response => {
				if (!response.ok) {
					throw new Error('Erro ao cadastrar usuário');
				}
				return response.json();
			})
			.then(data => {
				alert("Cadastro realizado com sucesso!");

				localStorage.setItem('usuarioId', data.idUsuario); 

				window.location.href = '../pages/cadastroEndereco.html';
			})
			.catch(error => {
				console.error('Erro no cadastro:', error);
				alert('Falha ao cadastrar usuário. Tente novamente.');
			});
	} catch (error) {
		console.error("Erro ao cadastrar o usuário", error);
		alert("Ocorreu um erro ao tentar cadastrar o usuário. Tente novamente.");
	}
});

function viewPassword() {
	const password = document.getElementById('senhaUsuario');
	const btnPassword = document.getElementById('btn-view-password');

	if (password.type == 'password') {
		password.type = 'text';
		btnPassword.className = 'fa-solid fa-eye';
	} else {
		password.type = 'password';
		btnPassword.className = 'fa-solid fa-eye-slash';
	}
}
