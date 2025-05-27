document.getElementById("cadastroProdutoForm").addEventListener("submit", async function (event) {
	event.preventDefault();

	const form = document.getElementById("cadastroProdutoForm");

	const nomeProduto = document.getElementById("nomeProduto").value;
	const descricao = document.getElementById("descricao").value;
	const preco = document.getElementById("preco").value;
	const imgUrl = document.getElementById("imgUrl").value;
	const categoriaProduto = document.getElementById("categoriaProduto").value;
	const tipoProduto = document.getElementById("tipoProduto").value;
	const ornamentoProduto = document.getElementById("ornamentoProduto").value;

	try {
		const response = await fetch("http://localhost:8080/cadastroproduto", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				nomeProduto,
				descricaoProduto: descricao,
				preco: parseFloat(preco),
				imgUrl,
				categoriaProduto: {
					idCategoriaProduto: parseInt(categoriaProduto)
				},
				tipoProduto: {
					idTipoProduto: parseInt(tipoProduto)
				},
				ornamento: {
					idOrnamento: parseInt(ornamentoProduto)
				}
			}),
		});


		if (response.ok) {
			setTimeout(() => {
				alert("Produto cadastrado com sucesso!");
				form.reset();
			}, 1000);
		} else {
			const erro = await response.text();
			alert("Erro ao cadastrar o produto: " + erro);
		}
	} catch (error) {
		console.error("Erro ao cadastrar o produto: ", error);
	}

});