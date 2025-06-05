let produtos = [];

const productsContainer = document.getElementById('products-container');
const noProducts = document.getElementById('no-products');
const filterButtons = document.querySelectorAll('.filter-btn');

// Renderiza os produtos recebidos
function renderProducts(produtosFiltrados) {
    productsContainer.innerHTML = '';

    if (produtosFiltrados.length === 0) {
        noProducts.classList.remove('hidden');
    } else {
        noProducts.classList.add('hidden');

        produtosFiltrados.forEach(produto => {
            const card = document.createElement('div');
            card.className = 'card';

            card.innerHTML = `
        <a href="paginaProduto.html?id=${produto.idProduto}">
        <img src="${produto.imgUrl}" alt="${produto.nomeProduto}">
        <div class="info">
          <h4>${produto.nomeProduto}</h4>
          <p>${produto.categoriaProduto?.nomeCategoriaProduto || 'Sem categoria'}</p>
          <span class="price">R$ ${produto.preco.toFixed(2)}</span>
        </div>
        </a>
      `;
            productsContainer.appendChild(card);
        });
    }
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:8080/cadastroproduto")
        .then(response => response.json())
        .then(data => {
            produtos = data;

            const urlParams = new URLSearchParams(window.location.search);
            const produtoId = urlParams.get("id");

            if (produtoId) {
                const produto = produtos.find(p => p.produtoId == produtoId);
                renderProducts(produto ? [produto] : []);
            } else {
                renderProducts(produtos); // mostra todos
            }
        })
        .catch(error => {
            console.error("Erro ao carregar produtos:", error);
            noProducts.textContent = "Erro ao carregar produtos.";
            noProducts.classList.remove('hidden');
        });
});

// Toggle do menu
document.querySelector('.dropbtn')?.addEventListener('click', function (event) {
    event.preventDefault();
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
});