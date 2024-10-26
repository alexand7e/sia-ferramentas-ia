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
      link: "https://www.humata.ai/",
      icon: "https://pbs.twimg.com/profile_images/1703895347393699840/KFLcQs1M_400x400.jpg"
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
      link: "https://www.chatbase.co/",
      icon: "https://www.chatbase.co/images/chatbase-logo.svg"
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
      link: "https://www.promptpal.net/br",
      icon: "https://cdn-1.webcatalog.io/catalog/promptpal/promptpal-icon-filled-256.webp?v=1714780825377"
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
      link: "https://www.listenmonster.com/",
      icon: "https://listenmonster.com/images/Logo.png"
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
      link: "https://ideogram.ai/",
      icon: "https://digino.org/wp-content/uploads/2023/12/ideogram-ai-logo.png"
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
      link: "https://magicstudio.com/pt/",
      icon: "https://meta.magicstudio.com/assets/studio-logo.svg"
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
      link: "https://postwise.ai/",
      icon: "https://cdn-1.webcatalog.io/catalog/postwise/postwise-icon-filled-256.png?v=1714782939491"
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
      link: "https://www.midjourney.com/",
      icon: "https://upload.wikimedia.org/wikipedia/commons/2/24/Midjourney_Emblem.svg"
    },
    {
      name: "ReplyMind",
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
      link: "https://www.replymind.com/",
      icon: "https://www.replymind.com/homapage/navbar/logo.png"
    },
    {
      name: "Suno",
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
      link: "https://suno.com/",
      icon: "https://suno.com/logos/Logo-7.svg"
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
      link: "https://firefly.adobe.com/inspire/images?ff_channel=adobe_com&ff_campaign=ffly_homepage&ff_source=firefly_seo",
      icon: "https://firefly.adobe.com/imgs/firefly_appicon_mobile.2c11f10a.svg"
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
      link: "https://supertools.therundown.ai/",
      icon: "https://assets.super.so/9b1db7dc-155d-4da6-bf88-a68ad1c2af0f/uploads/favicon/f4df662c-f46b-41d1-8e0c-9d0ef23e6a93.png"
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
      link: "https://openart.ai/",
      icon: "https://cdn.prod.website-files.com/6600e1eab90de089c2d9c972/661592239b560b13e5156fa7_Logo_dark.svg"
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
      link: "https://rytr.me/",
      icon: "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_9f8df7c21faf1372a87be5c4c02dab65/rytr.png"
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
      link: "https://chat.openai.com/",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/2048px-ChatGPT_logo.svg.png"
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
      link: "https://claude.ai/",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Claude_Ai.svg/1024px-Claude_Ai.svg.png"
    },
    {
      name: "Gemini",
      description: "Assistente avançado de IA e Assistente Google",
      category: "🤖 Automação",
      difficulty: 2,
      features: [
        "Análise complexa",
        "Processamento de documentos",
        "Auxílio em pesquisa",
        "Programação assistida",
        "Redação avançada"
      ],
      tags: ["Linguística", "Automação"],
      link: "https://gemini.google.com/app?hl=pt-BR",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThr7qrIazsvZwJuw-uZCtLzIjaAyVW_ZrlEQ&s"
    },
    {
      "name": "IBM Watson",
      "description": "Plataforma de IA para automação e processamento de linguagem natural",
      "category": "🤖 Automação",
      "difficulty": 4,
      "features": [
        "Análise de texto multilingue",
        "Criação de assistentes virtuais",
        "Extração de informações",
        "Classificação de texto",
        "Tradução automática"
      ],
      "tags": ["Linguística", "Automação"],
      "link": "https://www.ibm.com/br-pt/watson",
      "icon": "https://www.ibm.com/favicon.ico"
    },
    {
      name: "VideoGen",
      description: "Edição e criação de vídeo",
      category: "🎥 Vídeo",
      difficulty: 3,
      features: [
        "Edição automática",
        "Efeitos especiais",
        "Remoção de fundo",
        "Geração de vídeo",
        "Motion tracking"
      ],
      tags: ["Vídeo", "Edição"],
      link: "https://videogen.io/?via=runway",
      icon: "https://atai-main.b-cdn.net/tools/videogen-icon.png"
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
      link: "https://www.clipdrop.co/",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNlyB2qAHAPqIuZ7p86uAb8u21cz7aCnQlZA&s"
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
      link: "https://www.dreamstudio.ai/",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR72Cix8-F7qUtmxh8G55QkXwPiAJ1jN5G4Nw&s"
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
      link: "https://www.ostagram.me/static_pages/lenta?last_days=1000&locale=en",
      icon: "https://www.ostagram.me/logo.png"
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
      link: "https://www.capcut.com/pt-br/tools/ai-video-generator",
      icon: "https://images.sftcdn.net/images/t_app-icon-m/p/3ab9b4bc-bd4c-4ee3-b65e-fbab19e88adf/2239545102/capcut-Download-CapCut.jpg"
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
      link: "https://vidyo.ai/?via=duong-am&gad_source=1",
      icon: "https://cdn.prod.website-files.com/649330c3e40d813f90d8bb28/67013ebd50dbe0beb2a2774e_Vidyo-Logo-White-Nav.webp"
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
      link: "https://www.autopod.fm/",
      icon: "https://cdn.prod.website-files.com/6366be903a6ceae134a4c884/642dd490353b4f35be29e05f_all%20blue%20logo%20banner-p-500.png"
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
      link: "https://www.canva.com/magic-design/",
      icon: "https://static.canva.com/web/images/8439b51bb7a19f6e65ce1064bc37c197.svg"
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
      link: "https://www.youlearn.ai/",
      icon: "https://framerusercontent.com/images/2Qgh6K1tlFdsi2TUQHGLrkGT60.png"
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
      link: "https://acestudio.ai/",
      icon: "https://pbs.twimg.com/profile_images/1547177547330355200/7J8zlbZB_400x400.png"
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
      link: "https://www.dora.run/ai",
      icon: "https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/logo.png"
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
      link: "https://www.speechy.com/",
      icon: "https://website.cdn.speechify.com/speechify-logo-v2.svg?quality=80&width=256"
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
          <img src="${tool.icon}" alt="${tool.name} logo" class="tool-icon">
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
  
