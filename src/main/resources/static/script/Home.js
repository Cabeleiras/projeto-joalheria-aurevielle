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


document.addEventListener("DOMContentLoaded", async () => {
    const produtosContainer = document.querySelector(".produtos");

    try {
        // Substitua a URL abaixo pela URL real do seu backend
        const response = await fetch("http://localhost:8080/cadastroproduto");
        if (!response.ok) {
            throw new Error("Erro ao carregar os produtos");
        }

        const produtos = await response.json();

        produtos.forEach(produto => {
            const produtoCard = document.createElement("div");
            produtoCard.classList.add("produto");

            produtoCard.innerHTML = `
                <a href="http://localhost:8080/produto.html?id=${produto.id}">
                    <img src="${produto.imgUrl}" alt="${produto.nomeProduto}">
                    <h3>${produto.nomeProduto}</h3>
                    <span>R$ ${produto.preco.toFixed(2)}</span>
                </a>
            `;

            produtosContainer.appendChild(produtoCard);
        });
    } catch (error) {
        console.error("Erro:", error);
        produtosContainer.innerHTML = "<p>Erro ao carregar os produtos.</p>";
    }
});


// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener("DOMContentLoaded", () => {
   
    // Obtém os parâmetros da URL (query string)
    const urlParams = new URLSearchParams(window.location.search);
   
    // Captura o valor do parâmetro "id" da URL (correspondente ao produto selecionado)
    const produtoId = urlParams.get("id");
   
    // Verifica se um ID de produto foi passado na URL
    if (produtoId) {
       
        // Faz uma requisição para o backend buscando os detalhes do produto pelo ID
        fetch(`http://localhost:8080/cadastroproduto/${produtoId}`)
            .then(response => response.json()) // Converte a resposta para JSON
            .then(produto => {
                // Atualiza a imagem do produto
                document.getElementById("produto-img").src = produto.imgUrl;
                document.getElementById("produto-img").alt = produto.nomeProduto;

                // Atualiza o nome do produto
                document.getElementById("produto-nome").textContent = produto.nomeProduto;
               
                // Atualiza a descrição do produto
                document.getElementById("produto-descricao").textContent = produto.descricao;
               
                // Atualiza o preço do produto, formatando para duas casas decimais
                document.getElementById("produto-preco").textContent = `R$ ${produto.preco.toFixed(2)}`;
            })
            .catch(error => console.error("Erro ao carregar produto:", error)); // Exibe erro caso a requisição falhe
    }
});