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
}

export const categories = ['Todas', 'Tecnologia', 'Atualidades', 'Inovação', 'Segurança'];

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
    category: 'Tecnologia',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop',
    date: '27 Mar 2026',
    author: 'Equipe AlleApp',
    readTime: '4 min'
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
    category: 'Segurança',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop',
    date: '25 Mar 2026',
    author: 'Carlos Mendes',
    readTime: '5 min'
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
    category: 'Atualidades',
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
      <p>Aplicativos não estão mais confinados a retângulos de vidro. Eles podem flutuar na sua sala de estar, adaptar-se à iluminação do ambiente e responder a gestos sutis das mãos e movimentos dos olhos.</p>
      <h2>Colaboração Imersiva</h2>
      <p>Reuniões virtuais agora parecem encontros presenciais, com avatares fotorrealistas e áudio espacial que recriam a sensação de estar na mesma sala que seus colegas de trabalho.</p>
      <h2>O Desafio do Design</h2>
      <p>Desenvolvedores e designers enfrentam o desafio de criar experiências que sejam intuitivas e não intrusivas. A equipe do AlleApp já está explorando protótipos para levar nossa interface fluida para o ambiente de realidade mista, garantindo que a produtividade não tenha barreiras físicas.</p>
    `,
    category: 'Inovação',
    imageUrl: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=1600&auto=format&fit=crop',
    date: '18 Mar 2026',
    author: 'Equipe AlleApp',
    readTime: '4 min'
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
      <h2>Economia Circular de Hardware</h2>
      <p>Fabricantes de smartphones e computadores estão adotando o design modular, facilitando o reparo e a atualização de componentes individuais. O uso de materiais reciclados, como alumínio e plásticos retirados do oceano, tornou-se o novo padrão da indústria.</p>
      <h2>Software Eficiente</h2>
      <p>A eficiência não se limita ao hardware. Desenvolvedores estão otimizando códigos para consumir menos processamento e, consequentemente, menos bateria. No AlleApp, nossa arquitetura foi desenhada para ser extremamente leve, prolongando a vida útil da bateria do seu dispositivo e reduzindo a pegada de carbono digital.</p>
    `,
    category: 'Atualidades',
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
      <h2>Interfaces Cérebro-Computador (BCI)</h2>
      <p>Embora ainda em estágios iniciais para o consumidor geral, as interfaces neurais prometem permitir a interação com dispositivos digitais apenas com o pensamento, eliminando a necessidade de telas sensíveis ao toque ou comandos de voz.</p>
      <h2>A Transição</h2>
      <p>A mudança não acontecerá da noite para o dia. Veremos um período de transição onde os smartphones atuarão como "hubs" de processamento para esses novos dispositivos periféricos. O AlleApp está sendo projetado com uma arquitetura agnóstica de dispositivo, garantindo que sua vida digital permaneça organizada, independentemente de como você acessa a internet no futuro.</p>
    `,
    category: 'Inovação',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop',
    date: '10 Mar 2026',
    author: 'Equipe AlleApp',
    readTime: '7 min'
  }
];
