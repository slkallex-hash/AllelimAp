export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  imageUrl: string;
  date: string;
  author: string;
  readTime: string;
  trending?: boolean;
}

export const categories = ['Todas', 'Inteligência Artificial', 'Cibersegurança', 'Mercado Tech', 'Gadgets', 'Inovação', 'Sustentabilidade'];

export const newsData: NewsArticle[] = [
  {
    id: '1',
    slug: 'inteligencia-artificial-transformando-rotinas',
    title: 'Como a Inteligência Artificial está transformando nossas rotinas diárias',
    excerpt: 'Descubra como assistentes virtuais e algoritmos preditivos estão otimizando o tempo e aumentando a produtividade no trabalho e em casa.',
    content: `
      <p>A Inteligência Artificial (IA) deixou de ser um conceito futurista para se tornar uma ferramenta essencial no nosso dia a dia. Desde o momento em que acordamos até a hora de dormir, algoritmos trabalham silenciosamente para otimizar nossa rotina.</p>
      <h2>Otimização de Tempo</h2>
      <p>Aplicativos de produtividade agora utilizam IA para entender nossos padrões de trabalho. Eles sugerem os melhores horários para reuniões, bloqueiam distrações automaticamente e até mesmo rascunham respostas para e-mails comuns.</p>
      <h2>Saúde e Bem-estar</h2>
      <p>Smartwatches e aplicativos de saúde analisam dados biométricos em tempo real, fornecendo insights personalizados sobre qualidade do sono, níveis de estresse e necessidades de exercícios físicos.</p>
      <h2>O Futuro da Produtividade</h2>
      <p>Com a evolução contínua do aprendizado de máquina, podemos esperar assistentes virtuais ainda mais proativos, capazes de antecipar nossas necessidades antes mesmo de as percebermos. O AlleApp, por exemplo, já integra algumas dessas tecnologias para oferecer uma experiência de usuário sem precedentes.</p>
    `,
    category: 'Inteligência Artificial',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop',
    date: '27 Mar 2026',
    author: 'Equipe AlleApp',
    readTime: '4 min',
    trending: true
  },
  {
    id: '2',
    slug: 'ciberseguranca-em-2026',
    title: 'Cibersegurança em 2026: O que você precisa saber para se proteger',
    excerpt: 'Com o aumento das ameaças digitais, entender as novas camadas de segurança e criptografia é fundamental para proteger seus dados pessoais.',
    content: `
      <p>À medida que nossa dependência de plataformas digitais cresce, também aumentam os riscos associados à privacidade e segurança dos dados. Em 2026, a cibersegurança atingiu um novo patamar de complexidade.</p>
      <h2>Criptografia Quântica</h2>
      <p>A ameaça dos computadores quânticos forçou a indústria a adotar novos padrões de criptografia. Algoritmos pós-quânticos já estão sendo implementados em aplicativos de mensagens e serviços bancários para garantir que os dados de hoje não sejam decifrados amanhã.</p>
      <h2>Autenticação Biométrica Contínua</h2>
      <p>Esqueça as senhas tradicionais. A tendência agora é a autenticação contínua, onde o dispositivo analisa constantemente o padrão de digitação, a forma como você segura o celular e até o ritmo cardíaco para confirmar sua identidade.</p>
      <h2>Privacidade por Design</h2>
      <p>No AlleApp, a segurança não é um recurso opcional, mas a base da nossa arquitetura. Utilizamos criptografia de ponta a ponta e protocolos de conhecimento zero para garantir que apenas você tenha acesso às suas informações mais sensíveis.</p>
    `,
    category: 'Cibersegurança',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop',
    date: '25 Mar 2026',
    author: 'Carlos Mendes',
    readTime: '5 min',
    trending: true
  },
  {
    id: '3',
    slug: 'mercado-de-trabalho-tecnologia',
    title: 'O impacto das novas tecnologias no mercado de trabalho global',
    excerpt: 'Análise sobre como a automação e o trabalho remoto continuam a remodelar as profissões e as exigências do mercado atual.',
    content: `
      <p>O cenário profissional global passou por transformações drásticas na última década. A tecnologia não apenas criou novas profissões, mas também redefiniu como e onde trabalhamos.</p>
      <h2>A Ascensão dos Nômades Digitais 2.0</h2>
      <p>Com a infraestrutura de internet global (como o Starlink) mais acessível, o trabalho remoto deixou de ser um benefício para se tornar o padrão em muitas indústrias. Profissionais agora colaboram em tempo real de qualquer lugar do planeta.</p>
      <h2>Automação de Tarefas Repetitivas</h2>
      <p>A automação não está substituindo humanos, mas sim as tarefas robóticas que eles costumavam fazer. Isso libera tempo para o pensamento criativo, estratégia e resolução de problemas complexos.</p>
      <h2>Novas Habilidades Exigidas</h2>
      <p>A adaptabilidade e a fluência digital são agora mais valorizadas do que o conhecimento técnico específico, que pode se tornar obsoleto rapidamente. Ferramentas que centralizam a comunicação e a gestão de projetos, como o AlleApp, são essenciais para manter equipes distribuídas alinhadas e produtivas.</p>
    `,
    category: 'Mercado Tech',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop',
    date: '22 Mar 2026',
    author: 'Ana Silva',
    readTime: '6 min'
  },
  {
    id: '4',
    slug: 'computacao-espacial-realidade-mista',
    title: 'Computação Espacial: A nova fronteira da interação digital',
    excerpt: 'Óculos de realidade mista estão substituindo telas tradicionais. Veja como isso afeta o design de aplicativos e a experiência do usuário.',
    content: `
      <p>A transição das telas planas para interfaces tridimensionais está acontecendo mais rápido do que o previsto. A computação espacial permite que elementos digitais coexistam com o mundo físico de forma natural.</p>
      <h2>Interfaces Sem Limites</h2>
      <p>Aplicativos não estão confinados a retângulos de vidro. Eles podem flutuar na sua sala de estar, adaptar-se à iluminação do ambiente e responder a gestos sutis das mãos e movimentos dos olhos.</p>
      <h2>Colaboração Imersiva</h2>
      <p>Reuniões virtuais agora parecem encontros presenciais, com avatares fotorrealistas e áudio espacial que recriam a sensação de estar na mesma sala que seus colegas de trabalho.</p>
    `,
    category: 'Inovação',
    imageUrl: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=1600&auto=format&fit=crop',
    date: '18 Mar 2026',
    author: 'Equipe AlleApp',
    readTime: '4 min',
    trending: true
  },
  {
    id: '5',
    slug: 'sustentabilidade-tecnologia-verde',
    title: 'Tecnologia Verde: Como o setor tech está combatendo as mudanças climáticas',
    excerpt: 'Data centers neutros em carbono, dispositivos recicláveis e algoritmos eficientes estão liderando a revolução sustentável na tecnologia.',
    content: `
      <p>A indústria de tecnologia, historicamente criticada por seu alto consumo de energia e geração de lixo eletrônico, está passando por uma revolução verde. A sustentabilidade tornou-se um pilar central no desenvolvimento de novos produtos e serviços.</p>
      <h2>Data Centers Sustentáveis</h2>
      <p>As grandes empresas de nuvem agora operam data centers alimentados 100% por energia renovável. Além disso, sistemas inovadores de resfriamento, como a submersão de servidores em líquidos não condutores, reduziram drasticamente o consumo de energia.</p>
    `,
    category: 'Sustentabilidade',
    imageUrl: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1600&auto=format&fit=crop',
    date: '15 Mar 2026',
    author: 'Marina Costa',
    readTime: '5 min'
  },
  {
    id: '6',
    slug: 'futuro-dos-smartphones',
    title: 'O fim dos smartphones tradicionais? O que vem por aí',
    excerpt: 'Dispositivos vestíveis, interfaces neurais e projeções holográficas prometem substituir o celular como o conhecemos.',
    content: `
      <p>O smartphone tem sido o centro da nossa vida digital por quase duas décadas. No entanto, inovações recentes sugerem que o formato tradicional de "tela de vidro no bolso" pode estar com os dias contados.</p>
      <h2>Wearables Invisíveis</h2>
      <p>A tecnologia está se tornando cada vez mais integrada ao nosso corpo e roupas. Anéis inteligentes, tecidos conectados e lentes de contato com displays de realidade aumentada estão transferindo as funções do celular para dispositivos muito mais discretos.</p>
    `,
    category: 'Gadgets',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop',
    date: '10 Mar 2026',
    author: 'Equipe AlleApp',
    readTime: '7 min'
  },
  {
    id: '7',
    slug: 'ia-generativa-criacao-conteudo',
    title: 'A revolução da IA Generativa na criação de conteúdo digital',
    excerpt: 'Como modelos de linguagem e geradores de imagem estão mudando o trabalho de designers, escritores e criadores de vídeo.',
    content: `
      <p>A inteligência artificial generativa atingiu um nível de maturidade impressionante em 2026. Ferramentas que antes apenas auxiliavam, agora são co-criadoras ativas em agências de publicidade, estúdios de cinema e redações.</p>
      <h2>O Novo Papel do Criador</h2>
      <p>O foco mudou da execução técnica para a direção criativa. Profissionais agora atuam como "curadores" e "diretores" de IA, refinando prompts e selecionando os melhores resultados gerados pelas máquinas.</p>
    `,
    category: 'Inteligência Artificial',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1600&auto=format&fit=crop',
    date: '08 Mar 2026',
    author: 'Lucas Fernandes',
    readTime: '6 min',
    trending: true
  },
  {
    id: '8',
    slug: 'baterias-estado-solido',
    title: 'Baterias de estado sólido finalmente chegam aos eletrônicos de consumo',
    excerpt: 'A nova tecnologia promete dobrar a autonomia de smartphones e notebooks, além de reduzir drasticamente o tempo de recarga.',
    content: `
      <p>Após anos de pesquisa e promessas, as baterias de estado sólido começam a ser integradas em dispositivos comerciais. Esta tecnologia substitui o eletrólito líquido inflamável por um material sólido, oferecendo maior densidade de energia e segurança.</p>
      <h2>Adeus à ansiedade de bateria</h2>
      <p>Com a nova tecnologia, espera-se que smartphones durem até três dias com uma única carga, e que veículos elétricos ultrapassem a marca de 1.000 km de autonomia. Além disso, o tempo de recarga de 0 a 80% caiu para menos de 10 minutos.</p>
    `,
    category: 'Gadgets',
    imageUrl: 'https://images.unsplash.com/photo-1617783920365-c7002975fdc0?q=80&w=1600&auto=format&fit=crop',
    date: '05 Mar 2026',
    author: 'Roberto Almeida',
    readTime: '4 min'
  },
  {
    id: '9',
    slug: 'startups-clima-tech',
    title: 'O boom das startups "Climate Tech" no Brasil',
    excerpt: 'Investimentos em empresas focadas em soluções climáticas atingem recorde histórico no ecossistema de inovação brasileiro.',
    content: `
      <p>O Brasil está se consolidando como um polo global de tecnologias voltadas para a sustentabilidade e mitigação das mudanças climáticas. Em 2026, o volume de capital de risco investido em "Climate Techs" superou o de fintechs pela primeira vez.</p>
      <h2>Soluções Baseadas na Natureza</h2>
      <p>Muitas dessas startups utilizam IA e imagens de satélite para monitorar o desmatamento, otimizar a agricultura de precisão e facilitar o mercado de créditos de carbono, unindo tecnologia de ponta com a preservação ambiental.</p>
    `,
    category: 'Sustentabilidade',
    imageUrl: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=1600&auto=format&fit=crop',
    date: '02 Mar 2026',
    author: 'Marina Costa',
    readTime: '5 min'
  },
  {
    id: '10',
    slug: 'regulamentacao-ia-global',
    title: 'O novo acordo global para a regulamentação da Inteligência Artificial',
    excerpt: 'Líderes mundiais assinam tratado histórico para estabelecer limites éticos e de segurança no desenvolvimento de superinteligências.',
    content: `
      <p>Em um marco histórico para a governança tecnológica, mais de 100 países assinaram o Tratado Global de IA. O documento estabelece diretrizes rígidas para o desenvolvimento de modelos fundacionais e sistemas autônomos.</p>
      <h2>Transparência e Auditoria</h2>
      <p>As novas regras exigem que as empresas de tecnologia abram as "caixas-pretas" de seus algoritmos para auditorias independentes, garantindo que não haja vieses discriminatórios e que os sistemas sejam seguros para implantação em infraestruturas críticas.</p>
    `,
    category: 'Mercado Tech',
    imageUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1600&auto=format&fit=crop',
    date: '28 Fev 2026',
    author: 'Carlos Mendes',
    readTime: '8 min',
    trending: true
  },
  {
    id: '11',
    slug: 'ataques-ransomware-ia',
    title: 'Hackers utilizam IA para criar ataques de ransomware hiper-personalizados',
    excerpt: 'A evolução do cibercrime: como a inteligência artificial está sendo usada para automatizar a engenharia social e burlar defesas corporativas.',
    content: `
      <p>O jogo de gato e rato entre especialistas em segurança e cibercriminosos ganhou um novo capítulo. Hackers agora utilizam IA generativa para criar campanhas de phishing altamente convincentes, analisando o perfil das vítimas em redes sociais para personalizar as mensagens.</p>
      <h2>Defesa Baseada em IA</h2>
      <p>Para combater essa ameaça, as empresas estão adotando sistemas de defesa que também utilizam IA para identificar anomalias comportamentais na rede em tempo real, bloqueando ataques antes que a criptografia dos dados seja iniciada.</p>
    `,
    category: 'Cibersegurança',
    imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1600&auto=format&fit=crop',
    date: '25 Fev 2026',
    author: 'Ana Silva',
    readTime: '6 min'
  },
  {
    id: '12',
    slug: 'computacao-quantica-nuvem',
    title: 'Computação Quântica chega à nuvem para o público geral',
    excerpt: 'Grandes provedores de cloud agora oferecem acesso a processadores quânticos para desenvolvedores e pesquisadores independentes.',
    content: `
      <p>A computação quântica deixou os laboratórios de pesquisa restritos e chegou à nuvem. Desenvolvedores agora podem alugar tempo de processamento em máquinas quânticas para resolver problemas complexos de otimização, simulação molecular e criptografia.</p>
      <h2>Democratização do Poder de Cálculo</h2>
      <p>Essa democratização promete acelerar descobertas na medicina, ciência dos materiais e logística, permitindo que startups e universidades compitam com grandes corporações na vanguarda da pesquisa científica.</p>
    `,
    category: 'Inovação',
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1600&auto=format&fit=crop',
    date: '20 Fev 2026',
    author: 'Lucas Fernandes',
    readTime: '5 min'
  }
];
