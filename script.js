function scrollToSection() {
    const featuresSection = document.getElementById("features");
    featuresSection.scrollIntoView({ behavior: "smooth" });
}

document.getElementById('formEmpresa').addEventListener('submit', function(e) {
    e.preventDefault();

    const nomeEmpresa = document.getElementById('nomeEmpresa').value;
    const cnpj = document.getElementById('cnpj').value;
    const emailResponsavel = document.getElementById('emailResponsavel').value;

    // Aqui você faria o envio para a API do Back4App ou outro serviço.
    // Exemplo: enviarDadosEmpresa(nomeEmpresa, cnpj, emailResponsavel);

    // Mostra a mensagem de aviso para o usuário
    const mensagem = document.getElementById('mensagem');
    mensagem.style.display = 'block';

    // Limpa o formulário
    document.getElementById('formEmpresa').reset();

    // Exemplo: Simular envio para API (opcional)
    // setTimeout(() => alert('Simulação de envio para API concluída!'), 1000);
});

// Função de exemplo para enviar dados para o Back4App (opcional, caso queira integrar)
function enviarDadosEmpresa(nome, cnpj, email) {
    fetch('https://parseapi.back4app.com/classes/Empresas', {
        method: 'POST',
        headers: {
            'X-Parse-Application-Id': 'SUA_APP_ID', // Substitua pelo seu ID do Back4App
            'X-Parse-REST-API-Key': 'SUA_REST_API_KEY', // Substitua pela sua REST API KEY
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nomeEmpresa: nome,
            cnpj: cnpj,
            emailResponsavel: email
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Empresa cadastrada:', data);
    })
    .catch(error => {
        console.error('Erro:', error);
    });
}

