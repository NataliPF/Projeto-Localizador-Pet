// Função de inicialização do mapa
function initMap() {
    // Coordenadas do endereço (ajuste conforme necessário)
    var enderecoCoordenadas = [-23.550520, -46.633308];

    // Criar o mapa
    var map = L.map('map').setView(enderecoCoordenadas, 15);

    // Adicionar mapa base do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Adicionar marcador no endereço
    L.marker(enderecoCoordenadas).addTo(map)
        .bindPopup('Localização do Dono do Pet')
        .openPopup();
}

// Chamar a função de inicialização do mapa quando a página carregar
document.addEventListener('DOMContentLoaded', initMap);
