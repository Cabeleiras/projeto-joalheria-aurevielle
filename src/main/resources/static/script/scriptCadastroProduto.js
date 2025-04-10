document.addEventListener("DOMContentLoaded", () => {

	const form = document.getElementById("cadastroProdutoForm");

	form.addEventListener("submit", async (event) => {
		event.preventDefault();

		const nomeProduto = document.getElementById("nomeProduto").value;
		const descricao = document.getElementById("descricao").value;
		const preco = document.getElementById("preco").value;
		const imgUrl = document.getElementById("imgUrl").value;
		const categoriaProduto = document.getElementById("categoriaProduto").value;
		const tipoProduto = document.getElementById("tipoProduto").value;

		try {

			const response = await fetch("http://localhost:8080/cadastroproduto", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					nomeProduto,
					descricaoProduto: descricao,
					preco,
					imgUrl,
					categoriaProduto: {
						id: categoriaProduto
					}, 
					tipoProduto: {
						id: tipoProduto
					}
				})
			});

			if (response.ok) {
				setTimeout(() => {
					alert("Produto cadastrado com sucesso!");
				}, 1000);
			} else {
				alert("Erro ao cadastrar cliente");
			}
		} catch (error) {
			console.error("Erro ao cadastrar o cliente: ", error);
		}
	});
});