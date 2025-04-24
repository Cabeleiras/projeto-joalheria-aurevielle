document.getElementById("cadastroProdutoForm").addEventListener("submit", async function (event) {
	event.preventDefault();


	const nomeProduto = document.getElementById("nomeProduto");
	const descricao = document.getElementById("descricao");
	const preco = document.getElementById("preco");
	const imgUrl = document.getElementById("imgUrl");
	const categoriaProduto = document.getElementById("categoriaProduto");
	const tipoProduto = document.getElementById("tipoProduto");
	const ornamentoProduto = document.getElementById("ornamentoProduto");

	try {
		const response = await fetch("http://localhost:8080/cadastroproduto", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				nomeProduto: nomeProduto,
				descricaoProduto: descricao,
				preco: parseFloat(preco),
				imgUrl: imgUrl,
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