// Então, muitas anotações aqui porque eu sou leiga


// ================================================ Funções para obter os dados profile ================================================


// Dados do aluno embutidos no script, apenas para exemplo enquanto não há ligação backend
const data = {
    "aluno": {
        "nome": "Aluno Tal",
        "curso": "Engenharia de Software",
        "email": "aluno@fatec.edu.br",
        "imagem_url": "img/123.jpg"
    },
    "requerimentos": [
        {
            "nome": "Requerimento 1",
            "status": "Feito"
        },
        {
            "nome": "Requerimento 2",
            "status": "Em andamento"
        },
        {
            "nome": "Requerimento 3",
            "status": "Aguardando confirmação"
        },
        {
            "nome": "Requerimento 4",
            "status": "Possui falha"
        }
    ]
};

// Preenchendo informações do aluno
document.getElementById("student-name").textContent = data.aluno.nome;
document.getElementById("student-course").textContent = `CURSO: ${data.aluno.curso}`;
document.getElementById("student-email").textContent = `EMAIL: ${data.aluno.email}`;
document.querySelector('.profile-pic img').src = data.aluno.imagem_url;

// Preenchendo os requerimentos
const requirementsContainer = document.getElementById("requirements-container");
const historyList = document.getElementById("history-list");

data.requerimentos.forEach(req => {
    // Criando elemento para os requerimentos
    const requirementElement = document.createElement("div");
    requirementElement.classList.add("requirement-status-pair");

    const requirementTitle = document.createElement("p");
    requirementTitle.classList.add("requirement");
    requirementTitle.textContent = req.nome;

    const requirementStatus = document.createElement("p");
    requirementStatus.classList.add(`status-${getStatusClass(req.status)}`);
    requirementStatus.textContent = req.status;

    requirementElement.appendChild(requirementTitle);
    requirementElement.appendChild(requirementStatus);
    requirementsContainer.appendChild(requirementElement);

    // Adicionando ao histórico
    const historyItem = document.createElement("li");
    historyItem.textContent = `${req.nome} - ${req.status}`;
    historyList.appendChild(historyItem);
});

function getStatusClass(status) {
    if (status === "Feito") return "done";
    if (status === "Em andamento") return "in-progress";
    if (status === "Aguardando confirmação") return "awaiting";
    if (status === "Possui falha") return "failed";
    return "default";
  }
  


/* 
// Fazendo a requisição para pegar os dados em formato JSON (por enquanto, é só um arquivo imaginário)
fetch('dados_aluno.php') // Aqui só tô fingindo que tem uma conexão com o servidor
    .then(response => response.json()) // Transformando a resposta em JSON
    .then(data => {
        // Preenchendo as informações na página com os dados que vieram do JSON
        document.getElementById("student-name").textContent = data.aluno.nome;
        document.getElementById("student-course").textContent = `CURSO: ${data.aluno.curso}`;
        document.getElementById("student-email").textContent = `EMAIL: ${data.aluno.email}`;
        document.querySelector('.profile-pic img').src = data.aluno.imagem_url; // Colocando a foto do aluno pelo php

        // Preenchendo os requisitos 
        const requirementsContainer = document.getElementById("requirements-container");
        data.requerimentos.forEach(req => {
            const requirementElement = document.createElement("div");
            requirementElement.classList.add("requirement-status-pair");

            const requirementTitle = document.createElement("p");
            requirementTitle.classList.add("requirement");
            requirementTitle.textContent = req.nome;

            const requirementStatus = document.createElement("p");
            requirementStatus.classList.add(`status-${getStatusClass(req.status)}`);
            requirementStatus.textContent = req.status;

            requirementElement.appendChild(requirementTitle);
            requirementElement.appendChild(requirementStatus);

            requirementsContainer.appendChild(requirementElement);

            // O histórico é criaod com base nos requisitos que chegam
            const historyList = document.getElementById("history-list");
            const historyItem = document.createElement("li");
            historyItem.textContent = `${req.nome} - ${req.status}`; // Título e status do requisito aqui
            historyList.appendChild(historyItem); // Coloca no histórico 
        });
    })
    .catch(error => console.error('Deu erro ao tentar carregar os dados... tipo, claro!', error));

// Função para mapear o status e colocar as classes CSS certas 
function getStatusClass(status) {
    switch(status) {
        case 'Feito': return 'done';
        case 'Em andamento': return 'in-progress';
        case 'Aguardando confirmação': return 'awaiting';
        case 'Possui falha': return 'failed';
        default: return 'unknown'; // Vai que
    }
} 
*/


/*  NÃO ESTÁ SENDO USADO AINDA

// ================================================ Funções Login ================================================

document.addEventListener("DOMContentLoaded", function () {
    // Pegando os formulários e o botão para alternar entre eles
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const toggleFormBtn = document.getElementById("toggleForm");

    // Adicionando a função para alternar os formulários
    toggleFormBtn.addEventListener("click", function () {
        if (loginForm.classList.contains("active")) {
            loginForm.classList.remove("active");
            registerForm.classList.add("active");
            toggleFormBtn.textContent = "Já tem conta? Faça login!"; // Texto que vai enganar todo mundo
        } else {
            loginForm.classList.add("active");
            registerForm.classList.remove("active");
            toggleFormBtn.textContent = "Não tem conta? Cadastre-se!"; // Ou então engane mais um pouco
        }
    });
}); 

*/


// ================================================ Funções do Carrossel de Avisos ================================================

let currentIndex = 0; // A imagem inicial vai ser a 0 (começando bem, né?)
const intervalTime = 3000; // Mudar a imagem a cada 3 segundos
let interval; // Variável que vai armazenar o intervalo para a mudança de imagem

// Função para mostrar a imagem correta no carrossel
function showImage(index) {
    const images = document.querySelectorAll('.carousel-image');
    const indicators = document.querySelectorAll('.indicator');

    if (index >= images.length) {
        currentIndex = 0; // Se passou do número de imagens, volta pra primeira (mágica!)
    } else if (index < 0) {
        currentIndex = images.length - 1; // Se for menor que 0, vai pra última (tudo calculado, claro)
    } else {
        currentIndex = index;
    }

    // Atualiza a visibilidade das imagens e dos indicadores
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === currentIndex) {
            img.classList.add('active');
        }
    });

    indicators.forEach((indicator, i) => {
        indicator.classList.remove('active');
        if (i === currentIndex) {
            indicator.classList.add('active');
        }
    });
}

// Função para mudar a imagem automaticamente (se der certo, claro)
function autoShowImage() {
    currentIndex++;
    showImage(currentIndex);
}

// Começa a exibir a primeira imagem assim que a página carregar (se tudo der certo)
document.addEventListener('DOMContentLoaded', () => {
    showImage(currentIndex);
    interval = setInterval(autoShowImage, intervalTime);
});

// Pausa a mudança de imagem se o mouse estiver sobre o carrossel (de novo, se tudo der certo)
const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', () => clearInterval(interval)); // Pausa o intervalo
carousel.addEventListener('mouseleave', () => {
    interval = setInterval(autoShowImage, intervalTime); // Retoma o intervalo quando o mouse sair
});


// ================================================ Função para alternar o menu dropdown (visibilidade) ================================================

function toggleDropdown(event) {
    const dropdown = event.target.closest('.user-dropdown').querySelector('.dropdown-content');
    dropdown.classList.toggle('show'); // Alterna a classe 'show' e voilà! O menu aparece ou some
}
