function scrollToSection() {
    const featuresSection = document.getElementById("features");
    featuresSection.scrollIntoView({ behavior: "smooth" });
}

// Chaves do Back4App (substitua pelos seus valores!)
const APP_ID = "Kj7UT2t7F5I3SqwLfPUbliTQWzOaPZcNhKcsrBK6";
const API_KEY = "aBQFpVwctUH4V3RVl4k1vNkhWS7xgbrYK0SssE7T";

// Função para buscar empresa no Back4App
async function buscarEmpresa() {
    const buscaInput = document.getElementById("buscaInput").value.trim();
    const resultadoDiv = document.getElementById("resultadoBusca");

    if (!buscaInput) {
        resultadoDiv.innerHTML = "<p>Por favor, insira o nome de uma empresa.</p>";
        return;
    }

    resultadoDiv.innerHTML = "<p>Buscando informações...</p>";

    try {
        const response = await fetch(`https://parseapi.back4app.com/classes/Empresa?where=${encodeURIComponent(JSON.stringify({ nome: buscaInput }))}`, {
            method: "GET",
            headers: {
                "X-Parse-Application-Id": APP_ID,
                "X-Parse-REST-API-Key": API_KEY,
            }
        });

        const data = await response.json();

        if (data.results.length > 0) {
            const empresa = data.results[0];
            resultadoDiv.innerHTML = `
                <h3>${empresa.nome}</h3>
                <p>Conformidade com ODS: <strong>${empresa.odsConformidade}</strong></p>
            `;
        } else {
            resultadoDiv.innerHTML = `<p>Empresa <strong>${buscaInput}</strong> não encontrada na base.</p>`;
        }
    } catch (error) {
        console.error("Erro ao buscar empresa:", error);
        resultadoDiv.innerHTML = "<p>Erro ao buscar dados. Tente novamente mais tarde.</p>";
    }
}
