document.getElementById('formCadastroEmpresa').addEventListener('submit', function(e) {
    e.preventDefault();

    const nomeEmpresa = document.getElementById('nomeEmpresa').value;
    const cnpj = document.getElementById('cnpj').value;
    const segmento = document.getElementById('segmento').value;

    fetch('https://parseapi.back4app.com/classes/Empresas', {
        method: 'POST',
        headers: {
            'X-Parse-Application-Id': 'Kj7UT2t7F5I3SqwLfPUbliTQWzOaPZcNhKcsrBK6', 
            'X-Parse-REST-API-Key': 'aBQFpVwctUH4V3RVl4k1vNkhWS7xgbrYK0SssE7T', 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nomeEmpresa: nomeEmpresa,
            cnpj: cnpj,
            segmento: segmento
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Sucesso:', data);
        // Redireciona para a página de aguarde
        window.location.href = "aguarde.html";
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao cadastrar empresa. Tente novamente.');
    });
});