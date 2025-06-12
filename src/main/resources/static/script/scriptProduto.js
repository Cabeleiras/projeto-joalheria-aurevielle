document.addEventListener("DOMContentLoaded", () => {
   
    const urlParams = new URLSearchParams(window.location.search);
   
    const produtoId = urlParams.get("id");
   
    if (produtoId) {
       
        fetch(`http://localhost:8080/cadastroproduto/${produtoId}`)
            .then(response => response.json())
            .then(produto => {
                document.getElementById("produto-img").src = produto.imgUrl;
                document.getElementById("produto-img").alt = produto.nomeProduto;

                document.getElementById("produto-nome").textContent = produto.nomeProduto;
               
                document.getElementById("produto-descricao").textContent = produto.descricaoProduto;
               
                document.getElementById("produto-preco").textContent = `R$ ${produto.preco.toFixed(2)}`;

                document.getElementById("produto-categoria").textContent = `Categoria: ${produto.categoriaProduto.nomeCategoriaProduto}`;

                document.getElementById("produto-tipo").textContent = `Tipo: ${produto.tipoProduto.nomeTipo}`;

                document.getElementById("produto-ornamento").textContent = `Ornamento: ${produto.ornamento.nomeOrnamento}`;
				
				document.getElementById("categoria-produto").textContent = produto.categoriaProduto.nomeCategoriaProduto;
            })
            .catch(error => console.error("Erro ao carregar produto:", error));
    }
});