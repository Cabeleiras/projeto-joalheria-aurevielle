document.getElementById("cadastroUsuarioForm").addEventListener("submit", async function(event) {
	event.preventDefault();

	const nomeUsuario = document.getElementById("nomeUsuario").value;
	const cpfUsuario = document.getElementById("cpfUsuario").value;
	const emailUsuario = document.getElementById("emailUsuario").value;
	const telefone = document.getElementById("telefoneUsuario").value;
	const dt_nascimento = document.getElementById("dt_nascimento").value;
	const senhaUsuario = document.getElementById("senhaUsuario").value;

	try {
		const response = await fetch("http://localhost:8080/cadastrocliente", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				nomeUsuario,
				cpf: cpfUsuario,
				email: emailUsuario,
				telefone,
				dt_nascimento,
				senha: senhaUsuario,
				tipoUsuario: {
					idTipoUsuario: 2		
				}
			}),
		});
		if (response.ok) { // Verifica se a resposta é bem-sucedida
			const novoUsuario = await response.json(); // aqui vem o id
			const idUsuario = novoUsuario.idUsuario;

			// Salva no localStorage
			localStorage.setItem("idUsuario", idUsuario);

			// Vai para o formulário de endereço
			window.location.href = "cadastroEndereco.html";
		} else {
			alert("Erro ao cadastrar o cliente"); // Exibe alerta de erro se a resposta não for bem-sucedida
		}
	} catch (error) {
		console.error("Erro ao cadastrar o cliente", error);
		alert("Ocorreu um erro ao tentar cadastrar o cliente. Tente novamente.");
	}
});