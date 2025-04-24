document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("cadastroProdutoForm");

	// Função para limpar mensagens de erro anteriores
	function limparErros() {
		const mensagensErro = document.querySelectorAll(".mensagem-erro");
		mensagensErro.forEach(mensagem => mensagem.remove());
	}

	// Função para exibir uma mensagem de erro abaixo de um campo
	function mostrarErro(campo, mensagem) {
		const span = document.createElement("span");
		span.classList.add("mensagem-erro");
		span.style.color = "red";
		span.textContent = mensagem;
		campo.parentNode.appendChild(span);
	}

	form.addEventListener("submit", async (event) => {
		event.preventDefault();
		limparErros();

		const nomeProduto = document.getElementById("nomeProduto");
		const descricao = document.getElementById("descricao");
		const preco = document.getElementById("preco");
		const imgUrl = document.getElementById("imgUrl");
		const categoriaProduto = document.getElementById("categoriaProduto");
		const tipoProduto = document.getElementById("tipoProduto");

		// Validação simples
		let temErro = false;

		if (nomeProduto.value.trim() === "") {
			mostrarErro(nomeProduto, "Nome do produto é obrigatório.");
			temErro = true;
		}

		if (descricao.value.trim() === "") {
			mostrarErro(descricao, "Descrição é obrigatória.");
			temErro = true;
		}

		if (preco.value.trim() === "" || isNaN(preco.value)) {
			mostrarErro(preco, "Preço válido é obrigatório.");
			temErro = true;
		}

		if (imgUrl.value.trim() === "") {
			mostrarErro(imgUrl, "URL da imagem é obrigatória.");
			temErro = true;
		}

		if (categoriaProduto.value === "") {
			mostrarErro(categoriaProduto, "Selecione uma categoria.");
			temErro = true;
		}

		if (tipoProduto.value === "") {
			mostrarErro(tipoProduto, "Selecione um tipo de produto.");
			temErro = true;
		}

		if (temErro) return;

		// Envio do formulário via fetch
		try {
			const response = await fetch("http://localhost:8080/cadastroproduto", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					nomeProduto: nomeProduto.value,
					ornamento: null,
					descricaoProduto: descricao.value,
					preco: preco.value,
					imgUrl: imgUrl.value,
					categoriaProduto: categoriaProduto.value,
					tipoProduto: tipoProduto.value
					
				})
			});

			if (response.ok) {
				setTimeout(() => {
					alert("Produto cadastrado com sucesso!");
					form.reset();
				}, 1000);
			} else {
				alert("Erro ao cadastrar o produto");
			}
		} catch (error) {
			console.error("Erro ao cadastrar o produto: ", error);
		}
	});
});
