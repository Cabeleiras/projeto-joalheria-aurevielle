document.getElementById("formLogin").addEventListener("submit", async function (event) {
	event.preventDefault();

	const email = document.getElementById("email").value;
	const senha = document.getElementById("senha").value;

	try {
		const response = await fetch("http://localhost:8080/login", {
			method: "GET",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
			}),
		})
	} catch (error) {
		console.error("Erro ao cadastrar o usuário", error);
		alert("Ocorreu um erro ao tentar cadastrar o usuário. Tente novamente.");
	}
});