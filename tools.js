// const toolsData = require('./dict.js');
const loadAndTransformCSV = require('./test');

// const toolsData = require('./data/tools_data.json');

function renderTools(toolsArray) {
  const grid = document.querySelector('.grid');
  grid.innerHTML = ''; // Limpa a grid antes de renderizar

  toolsArray.forEach(tool => {
      const card = document.createElement('div');
      card.classList.add('card');
      
      card.innerHTML = `
          <div class="card-header">
              <img src="${tool.icon}" alt="${tool.name} logo" class="tool-icon">
              <h2>${tool.name}</h2>
          </div>
          <p class="description">${tool.description}</p>
          <div class="usability">${renderusability(tool.usability)}</div>
          <ul class="features-list">
              ${tool.features.map(feature => `<li>${feature}</li>`).join('')}
          </ul>
          <div class="tags">
              ${tool.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
          <a href="${tool.link}" class="link">Acessar Ferramenta</a>
      `;
      
      grid.appendChild(card);
  });
}

function renderusability(level) {
  let dots = '';
  for (let i = 0; i < 5; i++) {
      dots += `<span class="dot ${i < level ? 'filled' : ''}"></span>`;
  }
  return dots;
}

// Função para filtrar as ferramentas com base no termo de pesquisa
function filterToolsBySearch(term) {
  const filteredTools = tools.filter(tool => {
      const searchTerm = term.toLowerCase();
      return (
          tool.name.toLowerCase().includes(searchTerm) ||
          tool.description.toLowerCase().includes(searchTerm) ||
          tool.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
          tool.features.some(feature => feature.toLowerCase().includes(searchTerm))
      );
  });
  renderTools(filteredTools);
}

// Adiciona o evento de pesquisa no campo de entrada
document.getElementById("search-input").addEventListener("input", function() {
  const searchTerm = this.value.trim();
  if (searchTerm) {
      filterToolsBySearch(searchTerm);
  } else {
      renderTools(tools); 
  }
});

const filterButtons = document.querySelectorAll('.category-filter');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
      const category = button.textContent;

      // Verifica se o botão já está marcado
      if (button.classList.contains('selected')) {
          button.classList.remove('selected');
          renderTools(tools); // Remove o filtro e mostra todas as ferramentas
      } else {
          filterButtons.forEach(btn => btn.classList.remove('selected'));
          button.classList.add('selected');

          const filteredTools = tools.filter(tool => tool.category === category);
          renderTools(filteredTools);
      }
  });
});

// Renderiza todas as ferramentas no carregamento
renderTools(tools);

// Alterna a exibição do campo de pesquisa quando o ícone é clicado
document.getElementById("search-button").addEventListener("click", function() {
  const searchContainer = document.querySelector(".search-container");
  searchContainer.classList.toggle("active");
  const input = document.getElementById("search-input");
  if (input.style.width === "150px") {
      input.style.width = "0";
      input.style.opacity = "0";
      input.value = ''; // Limpa a pesquisa ao fechar
  } else {
      input.style.width = "150px";
      input.style.opacity = "1";
      input.focus();
  }
});

// Evento para realizar a pesquisa em tempo real
document.getElementById("search-input").addEventListener("input", function() {
  const searchTerm = this.value.trim();
  if (searchTerm) {
      filterToolsBySearch(searchTerm);
  } else {
      renderTools(tools); // Renderiza todas as ferramentas se o campo de pesquisa estiver vazio
  }
});
