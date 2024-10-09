// Array com as páginas
const pages = [
    'index.html',                   // Página inicial
    'o_que_e_bullying.html',        // O que é Bullying
    'bullying_nas_escolas.html'     // Bullying nas Escolas
];

let currentPage = 0; // Índice da página atual

function previousPage() {
    if (currentPage > 0) {
        currentPage--; // Decrementa o índice
        window.location.href = pages[currentPage]; // Navega para a página anterior
    }
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++; // Incrementa o índice
        window.location.href = pages[currentPage]; // Navega para a próxima página
    }
}

// Função para definir a página atual com base na URL
function setCurrentPage() {
    const currentUrl = window.location.href; // Pega a URL atual
    currentPage = pages.indexOf(currentUrl.split('/').pop()); // Define o índice da página atual
}

// Chama a função para definir a página atual ao carregar
window.onload = setCurrentPage;
