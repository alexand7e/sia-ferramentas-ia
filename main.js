import { tools } from './tools.js';

function renderTools(toolsArray) {
    const grid = document.querySelector('.grid');
    grid.innerHTML = ''; 
  
    toolsArray.forEach(tool => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        card.innerHTML = `
            <div class="card-header">
                <img src="${tool.icon}" alt="${tool.name} logo" class="tool-icon">
                <h2>${tool.name}</h2>
            </div>
            <p class="description">${tool.description}</p>
            <div class="usability" data-tooltip="Nota para acessibilidade: ${tool.usability}">
            ${renderusability(tool.usability)}
            </div>
            <div class="license ${tool.license.replace(/\s+/g, '-').toLowerCase()}">${tool.license}</div>
            <ul class="features-list">
                ${tool.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <div class="tags">
                ${tool.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="languages">
                ${tool.language.map(lang => `<span class="language">${lang}</span>`).join('')}
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

document.getElementById("search-input").addEventListener("input", function() {
  const searchTerm = this.value.trim();
  if (searchTerm) {
      filterToolsBySearch(searchTerm);
  } else {
      renderTools(tools); 
  }
});

const filterButtons = document.querySelectorAll('.category-filter');

document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll('.category-filter');
    let selectedCategory = null;
    let selectedLicense = null;
    let selectedLanguage = null;

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterType = button.closest('.filter-container')?.querySelector('.filter-toggle')?.textContent;
            const filterValue = button.textContent.trim();

            // Desmarca todos os botões da mesma categoria de filtro
            if (filterType === '🔒 Tipo de Licença') {
                selectedLicense = selectedLicense === filterValue ? null : filterValue;
                updateFilterButtonState(button, selectedLicense, filterValue);
            } else if (filterType === '🌐 Linguagem') {
                selectedLanguage = selectedLanguage === filterValue ? null : filterValue;
                updateFilterButtonState(button, selectedLanguage, filterValue);
            } else {
                selectedCategory = selectedCategory === filterValue ? null : filterValue;
                updateFilterButtonState(button, selectedCategory, filterValue);
            }

            // Filtra as ferramentas com base nos filtros selecionados
            applyFilters();
        });
    });

    function updateFilterButtonState(button, selectedFilter, filterValue) {
        filterButtons.forEach(btn => {
            if (btn.textContent.trim() === filterValue) {
                btn.classList.toggle('selected', selectedFilter === filterValue);
            } else if (btn.closest('.filter-container') === button.closest('.filter-container')) {
                btn.classList.remove('selected');
            }
        });
    }

    function applyFilters() {
        const filteredTools = tools.filter(tool => {
            const matchesCategory = selectedCategory ? tool.category === selectedCategory : true;
            const matchesLicense = selectedLicense ? tool.license === selectedLicense : true;
            const matchesLanguage = selectedLanguage ? tool.language.includes(selectedLanguage) : true;

            return matchesCategory && matchesLicense && matchesLanguage;
        });

        renderTools(filteredTools);
    }
});


// Renderiza todas as ferramentas no carregamento
renderTools(tools);

document.getElementById("search-button").addEventListener("click", function() {
  const searchContainer = document.querySelector(".search-container");
  searchContainer.classList.toggle("active");
  const input = document.getElementById("search-input");
  if (input.style.width === "150px") {
      input.style.width = "0";
      input.style.opacity = "0";
      input.value = ''; 
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
      renderTools(tools); 
  }
});

document.addEventListener("DOMContentLoaded", function() {
    const filterToggles = document.querySelectorAll(".filter-toggle");

    filterToggles.forEach(toggle => {
        toggle.addEventListener("click", function(event) {
            event.stopPropagation(); // Impede que o clique no botão feche o filtro
            const container = this.closest(".filter-container");

            // Fecha todos os outros filtros antes de abrir o atual
            document.querySelectorAll(".filter-container.active").forEach(activeContainer => {
                if (activeContainer !== container) {
                    activeContainer.classList.remove("active");
                }
            });

            container.classList.toggle("active");
        });
    });

    // Fecha o filtro quando o usuário clica fora
    document.addEventListener("click", function(event) {
        document.querySelectorAll(".filter-container.active").forEach(activeContainer => {
            if (!activeContainer.contains(event.target)) {
                activeContainer.classList.remove("active");
            }
        });
    });
});
