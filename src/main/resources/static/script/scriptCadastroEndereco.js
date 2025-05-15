document.getElementById("cep").addEventListener("input", async function(){
	const cep = this.value.replace(/\D/g, "");
	
	if (cep.length === 8){
		try{
			const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
			
			if(!response.ok) throw new Error("Erro ao buscar CEP");
			
			const dados = await response.json();
			
			if (dados.erro){
				alert("CEP não encontrado.")
				return;
			}
			
			document.getElementById("rua").value = dados.logradouro;
			document.getElementById("bairro").value = dados.bairro;
			document.getElementById("cidade").value = dados.localidade;
			document.getElementById("estado").value = dados.estado;
				
		} catch (error) {
			alert("Erro ao buscar o endereço: " + error.message);
		}
		
	}
})

document.getElementById("cadastroEnderecoForm").addEventListener("submit", async function(event) {
    event.preventDefault();

	if (!usuarioId) {
        alert("Usuário não encontrado. Por favor, cadastre um usuário primeiro.");
        window.location.href = "../cadastroUsuario.html";
        return;
    }

    const cep = document.getElementById("cep").value;
    const nomeRua = document.getElementById("rua").value;
    const numeroCasa = document.getElementById("numero").value;
    const bairro = document.getElementById("bairro").value;
    const cidade = document.getElementById("cidade").value;
    const estado = document.getElementById("estado").value;
	const complemento = document.getElementById("complemento").value;
	const idUsuario = localStorage.getItem("idUsuario");

    try {
        const response = await fetch("http://localhost:8080/cadastroendereco", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(
				{ 
					cep,
					rua: nomeRua,
					numero: numeroCasa,
					bairro,
					cidade,
					estado,
                    complemento,
					usuario: {
					    idUsuario: idUsuario
					}
				}),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao cadastrar jogo.");
            }
            return response.json();
        })
        .then(data => {
            alert("Cadastro do endereço realizado com sucesso!");
            localStorage.removeItem('usuarioId');
            window.location.href = "../index.html";
        })
        .catch(error => {
            console.error("Erro:", error);
            alert("Erro ao cadastrar endereço. Tente novamente.");
        });
    } catch (error) {
        alert(error.message);
    }
});
