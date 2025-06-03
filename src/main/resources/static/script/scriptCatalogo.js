const products = [
    { id: 1, name: 'Anel de Ouro 18k', category: 'Anéis', price: 'R$ 2.490,00', image: 'https://via.placeholder.com/400x300' },
    { id: 2, name: 'Colar com Diamantes', category: 'Colares', price: 'R$ 7.900,00', image: 'https://via.placeholder.com/400x300' },
    { id: 3, name: 'Brinco de Pérola', category: 'Brincos', price: 'R$ 1.250,00', image: 'https://via.placeholder.com/400x300' },
    { id: 4, name: 'Pulseira de Ouro', category: 'Pulseiras', price: 'R$ 3.150,00', image: 'https://via.placeholder.com/400x300' },
    { id: 5, name: 'Anel com Safira', category: 'Anéis', price: 'R$ 4.890,00', image: 'https://via.placeholder.com/400x300' },
    { id: 6, name: 'Colar de Ouro Branco', category: 'Colares', price: 'R$ 5.200,00', image: 'https://via.placeholder.com/400x300' },
];

const productsContainer = document.getElementById('products-container');
const noProducts = document.getElementById('no-products');
const filterButtons = document.querySelectorAll('.filter-btn');

function renderProducts(filtered) {
    productsContainer.innerHTML = '';

    if (filtered.length === 0) {
        noProducts.classList.remove('hidden');
    } else {
        noProducts.classList.add('hidden');
        filtered.forEach(product => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <div class="info">
            <h4>${product.name}</h4>
            <p>${product.category}</p>
            <span class="price">${product.price}</span>
          </div>
        `;
            productsContainer.appendChild(card);
        });
    }
}

function filterProducts(category) {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.filter-btn[onclick="filterProducts('${category}')"]`).classList.add('active');

    const filtered = category === 'Todos'
        ? products
        : products.filter(p => p.category === category);

    renderProducts(filtered);
}

// Inicializa com todos os produtos
renderProducts(products);

// Alterna a visibilidade do menu drop-down ao clicar
document.querySelector('.dropbtn').addEventListener('click', function (event) {
    event.preventDefault();
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
});
