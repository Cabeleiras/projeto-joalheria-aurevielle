const passwordIcons = document.querySelectorAll('.password-icon');

passwordIcons.forEach(icon => {
    icon.addEventListener('click', function () {
        const input = this.parentElement.querySelector('.form-control');
        input.type = input.type === 'password' ? 'text' : 'password';
        this.classList.toggle('fa-eye');
    })
})

  // Evento de submissão do formulário
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão

    // Simulando validação de login (substituir com lógica real, se necessário)
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '1234') {
        // Salva mensagem de sucesso no localStorage
        localStorage.setItem('loginSuccess', 'Login efetuado com sucesso!');
        
        // Redireciona para a página Home
        window.location.href = 'home.html';
    } else {
        alert('Usuário ou senha inválidos!');
    }
});

