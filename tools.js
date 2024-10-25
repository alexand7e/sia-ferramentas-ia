const tools = [
    {
      name: "Humata",
      description: "Análise e compreensão de documentos",
      category: "🔍 Análise",
      difficulty: 2,
      features: [
        "Extração inteligente de informações de documentos",
        "Respostas a perguntas baseadas em documentos",
        "Sumarização automática",
        "Análise de contratos e documentos legais",
        "Processamento de múltiplos formatos de arquivo"
      ],
      tags: ["Análise de Documentos", "Automação"],
      link: "https://www.humata.ai/"
    },
    {
      name: "Chatbase",
      description: "Construção de chatbots personalizados",
      category: "💬 Comunicação",
      difficulty: 3,
      features: [
        "Criação de chatbots sem código",
        "Treinamento personalizado com dados próprios",
        "Integração com websites",
        "Análise de conversas",
        "Personalização de respostas",
        "Sistema de feedback integrado"
      ],
      tags: ["Chatbots", "Atendimento"],
      link: "https://www.chatbase.co/"
    },
    {
      name: "Promptpal",
      description: "Compartilhamento e gerenciamento de prompts de IA",
      category: "📝 Conteúdo",
      difficulty: 2,
      features: [
        "Biblioteca de prompts prontos",
        "Categorização por tipo de uso",
        "Sistema de avaliação de prompts",
        "Compartilhamento comunitário",
        "Personalização de prompts"
      ],
      tags: ["Prompts", "Automação"],
      link: "#"
    },
    {
      name: "ListenMonster",
      description: "Transcrição de áudio para texto",
      category: "💬 Comunicação",
      difficulty: 4,
      features: [
        "Transcrição automática",
        "Suporte a múltiplos idiomas",
        "Reconhecimento de múltiplos falantes",
        "Exportação em diversos formatos",
        "Edição de transcrições"
      ],
      tags: ["Transcrição", "Áudio"],
      link: "#"
    },
    {
      name: "Ideogram",
      description: "Geração de imagens a partir de texto",
      category: "🎨 Design",
      difficulty: 2,
      features: [
        "Criação de imagens personalizadas",
        "Diferentes estilos artísticos",
        "Ajuste de parâmetros visuais",
        "Geração em batch",
        "Exportação em alta resolução"
      ],
      tags: ["Imagens", "Arte"],
      link: "#"
    },
    {
      name: "Magic Studio",
      description: "Edição automatizada de imagens",
      category: "🎨 Design",
      difficulty: 3,
      features: [
        "Remoção de fundos",
        "Redimensionamento inteligente",
        "Correção de cores",
        "Melhoria de qualidade",
        "Geração de variações"
      ],
      tags: ["Imagens", "Automação"],
      link: "#"
    },
    {
      name: "Postwise",
      description: "Gestão de conteúdo para redes sociais",
      category: "📝 Conteúdo",
      difficulty: 4,
      features: [
        "Geração automática de posts",
        "Agendamento inteligente",
        "Análise de engajamento",
        "Otimização de hashtags",
        "Sugestões de conteúdo"
      ],
      tags: ["Redes Sociais", "Automação"],
      link: "#"
    },
    {
      name: "Midjourney",
      description: "Geração de arte digital",
      category: "🎨 Design",
      difficulty: 3,
      features: [
        "Criação de imagens artísticas",
        "Diferentes estilos e técnicas",
        "Alta resolução",
        "Personalização avançada",
        "Variações de imagens"
      ],
      tags: ["Arte", "Design"],
      link: "#"
    },
    {
      name: "ReplayMind",
      description: "Automação de respostas em redes sociais",
      category: "💬 Comunicação",
      difficulty: 4,
      features: [
        "Respostas automáticas personalizadas",
        "Análise de sentimento",
        "Priorização de mensagens",
        "Monitoramento de menções",
        "Relatórios de engajamento"
      ],
      tags: ["Redes Sociais", "Automação"],
      link: "#"
    },
    {
      name: "Mubert",
      description: "Geração de música",
      category: "🎥 Vídeo",
      difficulty: 3,
      features: [
        "Criação de músicas originais",
        "Músicas livres de royalties",
        "Diferentes gêneros e estilos",
        "Ajuste de duração e ritmo",
        "Exportação em diversos formatos"
      ],
      tags: ["Música", "Áudio"],
      link: "#"
    },
    {
      name: "Adobe FireFly",
      description: "Criação e edição de conteúdo visual",
      category: "🎨 Design",
      difficulty: 3,
      features: [
        "Geração de imagens",
        "Edição de fotos",
        "Criação de texturas",
        "Manipulação de cores",
        "Efeitos especiais"
      ],
      tags: ["Imagens", "Design"],
      link: "#"
    },
    {
      name: "Supertools",
      description: "Suite de ferramentas de criação de conteúdo",
      category: "📝 Conteúdo",
      difficulty: 4,
      features: [
        "Edição de texto",
        "Criação de imagens",
        "Geração de código",
        "Análise de dados",
        "Automação de tarefas"
      ],
      tags: ["Automação", "Criação de Conteúdo"],
      link: "#"
    },
    {
      name: "OpenArt",
      description: "Plataforma de arte digital",
      category: "🎨 Design",
      difficulty: 2,
      features: [
        "Geração de imagens artísticas",
        "Galeria comunitária",
        "Compartilhamento de prompts",
        "Coleções personalizadas",
        "Exportação em alta qualidade"
      ],
      tags: ["Imagens", "Arte"],
      link: "#"
    },
    {
      name: "Rytr",
      description: "Assistente de escrita",
      category: "📝 Conteúdo",
      difficulty: 3,
      features: [
        "Geração de textos",
        "Correção gramatical",
        "Sugestões de estilo",
        "Múltiplos idiomas",
        "Templates prontos"
      ],
      tags: ["Escrita", "Automação"],
      link: "#"
    },
    {
      name: "ChatGPT",
      description: "Assistente conversacional",
      category: "🤖 Automação",
      difficulty: 3,
      features: [
        "Respostas em linguagem natural",
        "Auxílio em programação",
        "Análise de texto",
        "Tradução",
        "Explicações didáticas"
      ],
      tags: ["Conversação", "Automação"],
      link: "#"
    },
    {
      name: "Claude",
      description: "Assistente avançado de IA",
      category: "🤖 Automação",
      difficulty: 4,
      features: [
        "Análise complexa",
        "Processamento de documentos",
        "Auxílio em pesquisa",
        "Programação assistida",
        "Redação avançada"
      ],
      tags: ["Análise", "Automação"],
      link: "#"
    },
    {
      name: "Noor",
      description: "Processamento de língua árabe",
      category: "🌐 Web e Desenvolvimento",
      difficulty: 3,
      features: [
        "Tradução árabe",
        "Geração de texto",
        "Análise linguística",
        "Correção gramatical",
        "Transcrição fonética"
      ],
      tags: ["Linguística", "Automação"],
      link: "#"
    },
    {
      name: "Falcon",
      description: "Processamento de linguagem natural",
      category: "🤖 Automação",
      difficulty: 4,
      features: [
        "Análise de texto multilingue",
        "Geração de conteúdo",
        "Tradução",
        "Classificação de texto",
        "Extração de informações"
      ],
      tags: ["Linguística", "Automação"],
      link: "#"
    },
    {
      name: "Runway",
      description: "Edição e criação de vídeo",
      category: "🎥 Vídeo",
      difficulty: 4,
      features: [
        "Edição automática",
        "Efeitos especiais",
        "Remoção de fundo",
        "Geração de vídeo",
        "Motion tracking"
      ],
      tags: ["Vídeo", "Edição"],
      link: "#"
    },
    {
      name: "Clipdrop",
      description: "Edição de imagem",
      category: "🎨 Design",
      difficulty: 3,
      features: [
        "Remoção de fundo",
        "Upscaling",
        "Retoques automáticos",
        "Geração de imagens",
        "Edição em lote"
      ],
      tags: ["Imagens", "Design"],
      link: "#"
    },
    {
      name: "DreamStudio",
      description: "Geração de imagens",
      category: "🎨 Design",
      difficulty: 3,
      features: [
        "Criação de arte digital",
        "Personalização de estilos",
        "Edição de imagens",
        "Variações automáticas",
        "Controle de parâmetros"
      ],
      tags: ["Imagens", "Design"],
      link: "#"
    },
    {
      name: "Ostagram",
      description: "Fusão artística de imagens",
      category: "🎨 Design",
      difficulty: 2,
      features: [
        "Transferência de estilo",
        "Fusão de imagens",
        "Efeitos artísticos",
        "Personalização de parâmetros",
        "Galeria de estilos"
      ],
      tags: ["Imagens", "Arte"],
      link: "#"
    },
    {
      name: "CapCut",
      description: "Edição de vídeo",
      category: "🎥 Vídeo",
      difficulty: 4,
      features: [
        "Edição automática",
        "Efeitos especiais",
        "Transições",
        "Trilha sonora",
        "Templates prontos"
      ],
      tags: ["Vídeo", "Edição"],
      link: "#"
    },
    {
      name: "Vidyo",
      description: "Criação de vídeos curtos",
      category: "🎥 Vídeo",
      difficulty: 3,
      features: [
        "Recorte inteligente",
        "Legendagem automática",
        "Otimização para redes sociais",
        "Edição em lote",
        "Templates personalizados"
      ],
      tags: ["Vídeo", "Edição"],
      link: "#"
    },
    {
      name: "Autopod",
      description: "Edição de podcasts",
      category: "🎥 Vídeo",
      difficulty: 4,
      features: [
        "Edição multicâmera",
        "Sincronização automática",
        "Remoção de ruído",
        "Mixagem de áudio",
        "Exportação otimizada"
      ],
      tags: ["Áudio", "Podcast"],
      link: "#"
    },
    {
      name: "Canva Magic Design",
      description: "Design gráfico",
      category: "🎨 Design",
      difficulty: 2,
      features: [
        "Templates inteligentes",
        "Geração de designs",
        "Edição de imagens",
        "Branding automático",
        "Colaboração em equipe"
      ],
      tags: ["Design", "Criação"],
      link: "#"
    },
    {
      name: "YouLearn",
      description: "Criação de conteúdo educacional",
      category: "📚 Educação",
      difficulty: 3,
      features: [
        "Geração de material didático",
        "Quizzes automáticos",
        "Personalização de conteúdo",
        "Análise de aprendizado",
        "Gamificação"
      ],
      tags: ["Educação", "Automação"],
      link: "#"
    },
    {
      name: "VocalReplica",
      description: "Extração de áudio",
      category: "🎥 Vídeo",
      difficulty: 3,
      features: [
        "Separação de vocais",
        "Isolamento de instrumentos",
        "Limpeza de áudio",
        "Conversão de formato",
        "Edição de áudio"
      ],
      tags: ["Áudio", "Edição"],
      link: "#"
    },
    {
      name: "Dora",
      description: "Criação de websites",
      category: "🌐 Web e Desenvolvimento",
      difficulty: 4,
      features: [
        "Design automático",
        "Otimização SEO",
        "Responsividade",
        "Templates personalizados",
        "Integração com IA"
      ],
      tags: ["Web", "Automação"],
      link: "#"
    },
    {
      name: "Speechy",
      description: "Treinamento de fala",
      category: "📚 Educação",
      difficulty: 3,
      features: [
        "Análise de pronúncia",
        "Feedback em tempo real",
        "Exercícios personalizados",
        "Monitoramento de progresso",
        "Dicas de apresentação"
      ],
      tags: ["Educação", "Fala"],
      link: "#"
    }
  ];
  
  
  function renderTools(toolsArray) {
    const grid = document.querySelector('.grid');
    grid.innerHTML = ''; // Limpa a grid antes de renderizar
  
    toolsArray.forEach(tool => {
      const card = document.createElement('div');
      card.classList.add('card');
      
      card.innerHTML = `
        <div class="card-header">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
          <h2>${tool.name}</h2>
        </div>
        <p class="description">${tool.description}</p>
        <div class="difficulty">${renderDifficulty(tool.difficulty)}</div>
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
  
  function renderDifficulty(level) {
    let dots = '';
    for (let i = 0; i < 5; i++) {
      dots += `<span class="dot ${i < level ? 'filled' : ''}"></span>`;
    }
    return dots;
  }
  
const filterButtons = document.querySelectorAll('.category-filter');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.textContent;

    // Verifica se o botão já está marcado
    if (button.classList.contains('selected')) {
      // Se estiver marcado, desmarque o botão e mostre todos os tools
      button.classList.remove('selected');
      renderTools(tools); // Remove o filtro e mostra todas as ferramentas
    } else {
      // Se não estiver marcado, desmarque todos os outros e marque o botão clicado
      filterButtons.forEach(btn => btn.classList.remove('selected'));
      button.classList.add('selected');

      // Filtra as ferramentas pela categoria e renderiza
      const filteredTools = tools.filter(tool => tool.category === category);
      renderTools(filteredTools);
    }
  });
});

  
  // Renderiza todas as ferramentas no carregamento
  renderTools(tools);
  