// Alterna a visibilidade do menu drop-down ao clicar
document.querySelector('.dropbtn').addEventListener('click', function (event) {
    event.preventDefault();
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
  });