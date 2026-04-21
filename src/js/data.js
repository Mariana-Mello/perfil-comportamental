/* ─────────────────────────────────────────
   Avaliação de Perfil Comportamental
   data.js — perguntas e perfis
───────────────────────────────────────── */

const Qs = [
  {
    scene: "📋 No trabalho",
    story: 'Seu gestor chega com uma ideia nova, ainda crua, sem forma definida. Ele joga no ar: <em>"Preciso que alguém pegue isso e transforme em algo real."</em>',
    main: "Como você reage diante dessa situação?",
    opts: [
      { t: "I", label: "Minha cabeça já dispara — começo a imaginar possibilidades que ninguém viu ainda." },
      { t: "C", label: "Pergunto quem vai participar e como posso ajudar a integrar o time nessa ideia." },
      { t: "O", label: "Quero entender todos os detalhes antes de dar qualquer passo." },
      { t: "A", label: "Já estou pensando em como entregar isso o mais rápido possível." }
    ]
  },
  {
    scene: "✈️ Uma viagem de negócios",
    story: "Você e mais três colegas precisam viajar juntos para uma reunião importante. O roteiro ainda não foi definido.",
    main: "Qual é o seu papel natural nessa situação?",
    opts: [
      { t: "A", label: "Tomo a frente — já começo a pesquisar voos e coordenar a logística." },
      { t: "C", label: "Pergunto o que cada um prefere e tento montar algo que agrade a todos." },
      { t: "O", label: "Faço uma planilha com horários, custos e alternativas antes de qualquer decisão." },
      { t: "I", label: "Sugiro ir por uma rota diferente — quem sabe aproveitamos algo novo no caminho?" }
    ]
  },
  {
    scene: "💬 Uma conversa difícil",
    story: "Um colega próximo cometeu um erro que afetou o resultado do projeto. Você percebeu antes de todo mundo.",
    main: "Como você lida com essa situação?",
    opts: [
      { t: "I", label: "Reflito sobre o contexto — talvez haja algo maior por trás desse erro." },
      { t: "O", label: "Anoto os fatos com clareza antes de qualquer conversa." },
      { t: "A", label: "Falo diretamente com ele — sem rodeios, só os pontos que importam." },
      { t: "C", label: "Escolho um momento mais tranquilo e converso com cuidado, preservando a relação." }
    ]
  },
  {
    scene: "🚀 Um novo projeto",
    story: "A empresa vai lançar um produto e precisa de voluntários para liderar a iniciativa. As regras ainda não estão claras.",
    main: "O que passa pela sua cabeça antes de levantar a mão?",
    opts: [
      { t: "I", label: "Penso nas possibilidades criativas — esse projeto pode virar algo surpreendente." },
      { t: "O", label: "Avalio os riscos e os recursos disponíveis antes de qualquer compromisso." },
      { t: "C", label: "Me pergunto quem estará no time — as pessoas certas fazem toda a diferença." },
      { t: "A", label: "Já quero saber o prazo e o que precisa ser entregue." }
    ]
  },
  {
    scene: "🎉 Sexta-feira à noite",
    story: "Semana intensa. Você finalmente tem tempo livre pela frente.",
    main: "O que te dá mais energia de verdade?",
    opts: [
      { t: "A", label: "Fazer algo que me mova — treinar, resolver pendências, estar em ação." },
      { t: "I", label: "Explorar algo novo: um lugar, uma ideia, um projeto pessoal." },
      { t: "C", label: "Estar com pessoas que importam — jantar, conversa longa, conexão real." },
      { t: "O", label: "Uma agenda tranquila, cada coisa no seu tempo, sem surpresas." }
    ]
  },
  {
    scene: "🤝 Impasse na equipe",
    story: "O time está dividido sobre como conduzir uma decisão importante. Ninguém chega a um consenso depois de longos debates.",
    main: "O que você acredita ser a saída mais eficaz?",
    opts: [
      { t: "C", label: "Ouvir cada um com atenção — a resposta costuma estar dentro do próprio grupo." },
      { t: "A", label: "Alguém precisa tomar a decisão. Debates intermináveis custam tempo." },
      { t: "I", label: "Talvez estejamos olhando para o problema errado — vale reformular a pergunta." },
      { t: "O", label: "Levantar os dados concretos e deixar os fatos guiarem a conclusão." }
    ]
  },
  {
    scene: "🌅 Daqui a 10 anos",
    story: "Você se imagina no futuro, olhando para trás com orgulho. A vida profissional foi intensa e valeu cada escolha.",
    main: "O que te deixaria mais realizado nessa cena?",
    opts: [
      { t: "I", label: "Ter criado algo que nunca existiu antes — uma ideia que virou realidade." },
      { t: "C", label: "Ter tocado a vida de muitas pessoas e construído relações que duram." },
      { t: "O", label: "Ter construído algo sólido, com qualidade e que perdurou no tempo." },
      { t: "A", label: "Ter alcançado metas que pareciam impossíveis — e ter provado que era capaz." }
    ]
  },
  {
    scene: "📣 Na apresentação",
    story: "Você está apresentando uma proposta e percebe que a maioria da sala ainda não entendeu o ponto principal.",
    main: "Qual é a sua reação?",
    opts: [
      { t: "I", label: "Mudo de abordagem — às vezes a ideia precisa de uma nova embalagem." },
      { t: "O", label: "Volto ao começo e detalho melhor cada ponto, com calma." },
      { t: "A", label: "Vou direto ao benefício concreto — o resto é detalhe." },
      { t: "C", label: "Abro espaço para perguntas — quero entender onde a comunicação quebrou." }
    ]
  },
  {
    scene: "📚 Crescimento profissional",
    story: "Você tem a chance de escolher como quer se desenvolver nos próximos meses. Recursos e tempo disponíveis.",
    main: "O que te atrai mais?",
    opts: [
      { t: "A", label: "Aprender algo que me dê vantagem competitiva imediata." },
      { t: "I", label: "Me aprofundar em algo que ainda não explorei — quanto mais desafiador, melhor." },
      { t: "O", label: "Dominar com profundidade o que já faço — excelência vem da prática constante." },
      { t: "C", label: "Aprender algo que melhore minha capacidade de trabalhar com pessoas." }
    ]
  },
  {
    scene: "🏁 Reta final",
    story: "O projeto está quase no fim. Ainda há tempo para alguns ajustes antes da entrega.",
    main: "O que mais te importa nesse momento?",
    opts: [
      { t: "A", label: "Entregar logo — o resultado final é o que fica." },
      { t: "C", label: "Garantir que todos do time estejam bem e satisfeitos com o processo." },
      { t: "O", label: "Revisar com cuidado — não quero que nenhum detalhe passe despercebido." },
      { t: "I", label: "Ver se ainda cabe alguma melhoria criativa antes de fechar." }
    ]
  },
  {
    scene: "☀️ O dia ideal",
    story: "Imagine o dia perfeito de trabalho — aquele em que você termina completamente realizado.",
    main: "O que fez desse dia tão especial?",
    opts: [
      { t: "A", label: "Resolvi muita coisa. Foi um dia de alta produtividade." },
      { t: "C", label: "Estive cercado de pessoas que gosto. A conexão foi genuína." },
      { t: "O", label: "Tudo saiu conforme planejado. Sem imprevistos, sem desvios." },
      { t: "I", label: "Vivi algo diferente e inesperado — saí da zona de conforto." }
    ]
  },
  {
    scene: "🌌 Uma conversa profunda",
    story: 'Um amigo próximo te pergunta: <em>"Você tem medo de morrer?"</em> — de repente, em plena conversa corriqueira.',
    main: "Como você responderia com mais honestidade?",
    opts: [
      { t: "I", label: '"Não sei o que vem depois — e essa incerteza me fascina mais do que me assusta."' },
      { t: "C", label: '"Me preocupo com quem vai ficar, mais do que com o que vai acontecer comigo."' },
      { t: "O", label: '"Prefiro não pensar nisso agora. Tem muita coisa a fazer ainda."' },
      { t: "A", label: '"Sim — e justamente por isso quero aproveitar cada dia ao máximo."' }
    ]
  },
  {
    scene: "💡 Sua visão de mundo",
    story: "Você observa pessoas ao redor e nota padrões completamente diferentes de encarar a vida profissional.",
    main: "Qual dessas frases mais representa o que você acredita?",
    opts: [
      { t: "A", label: '"Competição é saudável — e eu prefiro estar à frente."' },
      { t: "C", label: '"O sucesso compartilhado é mais satisfatório do que o solitário."' },
      { t: "O", label: '"Seguir boas práticas é o caminho mais seguro para resultados consistentes."' },
      { t: "I", label: '"As melhores oportunidades estão onde as regras ainda não chegaram."' }
    ]
  },
  {
    scene: "🗺️ Mudança no horizonte",
    story: "Uma mudança importante está acontecendo na empresa. O processo ainda não está claro para ninguém — nem para a liderança.",
    main: "Qual é a sua primeira reação interna?",
    opts: [
      { t: "I", label: "Curiosidade — toda mudança traz oportunidades escondidas." },
      { t: "O", label: "Cautela — preciso entender bem o que está mudando antes de agir." },
      { t: "A", label: "Urgência — quero me posicionar bem antes que outros o façam." },
      { t: "C", label: "Atenção ao time — como as pessoas estão reagindo a isso?" }
    ]
  },
  {
    scene: "🔄 Plano B",
    story: "No meio de um projeto importante, você descobre uma informação que muda completamente o cenário. Tudo que foi planejado precisa ser revisto.",
    main: "O que você faz?",
    opts: [
      { t: "A", label: "Adapto o plano imediatamente e sigo em frente." },
      { t: "C", label: "Reúno o time antes de qualquer decisão — isso afeta a todos." },
      { t: "I", label: "Enxergo como uma oportunidade de recomeçar com uma perspectiva mais rica." },
      { t: "O", label: "Analiso o impacto em cada etapa antes de qualquer movimento." }
    ]
  },
  {
    scene: "🪞 No espelho",
    story: 'Alguém próximo te diz: <em>"Você sempre faz isso"</em> — referindo-se a um comportamento que você não percebe em si mesmo.',
    main: "Como você reage?",
    opts: [
      { t: "A", label: "Ouço, mas confio no meu julgamento — conheço bem meus próprios motivos." },
      { t: "C", label: "Fico genuinamente curioso — se foi percebido, vale refletir." },
      { t: "O", label: "Peço exemplos concretos — preciso de evidências para avaliar." },
      { t: "I", label: "Aceito bem — gosto de ser desafiado a me ver de outro ângulo." }
    ]
  },
  {
    scene: "🏆 Buscando referências",
    story: "Você quer crescer em algo que ainda não domina. Tem tempo e disposição — mas precisa escolher onde buscar inspiração.",
    main: "Onde você procura?",
    opts: [
      { t: "A", label: "Pessoas que chegaram onde quero chegar — resultados falam por si." },
      { t: "C", label: "Mentores que viveram muito e têm sabedoria para compartilhar." },
      { t: "O", label: "Especialistas reconhecidos — quero aprender com quem domina o assunto." },
      { t: "I", label: "Fontes inesperadas — uma viagem, um livro fora do nicho, uma conversa aleatória." }
    ]
  },
  {
    scene: "📌 Seu manifesto",
    story: "Se você pudesse resumir em uma frase o seu modo de operar no mundo do trabalho — uma frase que as pessoas associariam a você.",
    main: "Qual dessas ressoaria mais verdadeiro?",
    opts: [
      { t: "I", label: '"Faça diferente — o mundo já tem gente suficiente fazendo igual."' },
      { t: "O", label: '"Faça certo — capricho e consistência são formas de respeito."' },
      { t: "C", label: '"Faça junto — as melhores coisas surgem da colaboração."' },
      { t: "A", label: '"Faça agora — ideia sem execução é só intenção."' }
    ]
  },
  {
    scene: "🧘 Ambiente ideal",
    story: "Você tem a chance de montar o seu ambiente de trabalho perfeito do zero. Nenhuma limitação.",
    main: "O que não pode faltar?",
    opts: [
      { t: "I", label: "Liberdade para experimentar sem precisar justificar cada escolha." },
      { t: "O", label: "Processos claros, metas definidas e pouco espaço para improviso." },
      { t: "C", label: "Um time unido onde as pessoas se respeitam e se apoiam." },
      { t: "A", label: "Autonomia para tomar decisões e ver resultados com rapidez." }
    ]
  },
  {
    scene: "⏱️ Pontualidade",
    story: "Um colega chega 20 minutos atrasado em uma reunião que você organizou com antecedência. Sem aviso prévio, sem explicação.",
    main: "O que passa pela sua cabeça?",
    opts: [
      { t: "A", label: "Aborrecimento claro — tempo é o único recurso que não se recupera." },
      { t: "C", label: "Preocupação — será que aconteceu algo com ele?" },
      { t: "O", label: "Frustração — planejei tudo com cuidado e isso desorganiza." },
      { t: "I", label: "Indiferença relativa — uso o tempo para pensar em outras coisas." }
    ]
  },
  {
    scene: "💰 Liberdade financeira",
    story: "Você acorda amanhã com liberdade financeira total. Não precisa mais trabalhar por necessidade — pode fazer o que quiser.",
    main: "O que você faria?",
    opts: [
      { t: "C", label: "Investiria em causas que ajudam pessoas — meu impacto seria nas vidas ao redor." },
      { t: "O", label: "Construiria algo sólido e duradouro — um patrimônio para as próximas gerações." },
      { t: "I", label: "Realizaria os projetos que sempre ficaram na gaveta por falta de tempo." },
      { t: "A", label: "Entraria nos mercados que sempre me atraíram — agora sem restrições." }
    ]
  },
  {
    scene: "🛤️ Processo ou resultado?",
    story: 'Dois amigos debatem: um diz que <em>o caminho é mais importante que o destino</em>. O outro discorda com convicção.',
    main: "Com qual visão você mais se identifica?",
    opts: [
      { t: "A", label: "O destino importa mais — chegar lá é o que valida tudo que foi feito." },
      { t: "C", label: "A jornada é insubstituível — o que vivemos no caminho nos transforma." },
      { t: "O", label: "Depende — mas sem um bom processo, o resultado raramente é sustentável." },
      { t: "I", label: "Nem um nem outro — o mais importante é estar em movimento, explorando." }
    ]
  },
  {
    scene: "🎲 Decisão sob pressão",
    story: "Prazo apertado. Informações incompletas. Uma decisão precisa ser tomada agora — e todos olham para você.",
    main: "Como você age?",
    opts: [
      { t: "A", label: "Decido rápido com o que tenho — hesitar custa mais do que errar." },
      { t: "O", label: "Busco as informações mínimas necessárias antes de qualquer movimento." },
      { t: "C", label: "Consulto alguém de confiança — decisões importantes merecem mais de uma cabeça." },
      { t: "I", label: "Olho para o problema de um ângulo diferente — às vezes a solução está fora do óbvio." }
    ]
  },
  {
    scene: "🌱 Feedback duro",
    story: "Você recebe um feedback honesto e direto sobre um comportamento que te limita. Não foi fácil de ouvir — mas é verdadeiro.",
    main: "Como você processa isso?",
    opts: [
      { t: "O", label: "Analiso com calma — prefiro entender bem antes de reagir." },
      { t: "I", label: "Fico curioso sobre o que esse ponto cego revela sobre mim." },
      { t: "A", label: "Agradeço e sigo — não posso parar por isso." },
      { t: "C", label: "Converso com pessoas próximas para entender se é uma percepção compartilhada." }
    ]
  },
  {
    scene: "🔮 O futuro do trabalho",
    story: "O mercado está mudando rápido. Inteligência artificial, trabalho remoto, novas formas de colaboração. Nada é mais como antes.",
    main: "Qual dessas frases resume melhor a sua visão?",
    opts: [
      { t: "I", label: '"Quem cria as novas regras tem vantagem sobre quem apenas as segue."' },
      { t: "O", label: '"Em meio ao caos, quem mantém consistência se destaca."' },
      { t: "C", label: '"As melhores equipes vão dominar — nenhuma IA substitui conexão humana real."' },
      { t: "A", label: '"Velocidade de execução vai separar os que crescem dos que ficam para trás."' }
    ]
  }
];

/* ─────────────────────────────────────────
   PERFIS — com artigo e URLs Lottie
───────────────────────────────────────── */
const profiles = {
  I: {
    name: "Águia", artigo: "uma", emoji: "🦅", color: "#4A90D9", motto: '"Fazer Diferente"',
    /*// lottie: "https://assets5.lottiefiles.com/packages/lf20_jtbfg2nb.json",*/
        lottie: "public/animations/aguia.json",
    traits: ["Criativo", "Intuitivo", "Visionário", "Curioso", "Flexível", "Informal"],
    strength:  "Você enxerga o futuro antes dos outros. Sua força está em transformar ideias em possibilidades que ninguém havia imaginado.",
    challenge: "Pode se perder nos próprios conceitos e ter dificuldade com rotina e detalhes operacionais.",
    needs:     "Autonomia criativa, ambiente sem controles rígidos e liberdade para delegar o que não te inspira.",
    value:     "Você inspira ideias e quebra padrões — é o motor da inovação dentro de qualquer equipe."
  },
  C: {
    name: "Gato", artigo: "um", emoji: "🐱", color: "#C77DFF", motto: '"Fazer Junto"',
    //lottie: "https://assets3.lottiefiles.com/packages/lf20_myejiggj.json",
    lottie: "public/animations/gato.json",
    traits: ["Sensível", "Relacional", "Empático", "Colaborativo", "Harmonioso", "Diplomático"],
    strength:  "Você constrói pontes entre pessoas. Sua habilidade de criar vínculos e manter a harmonia é rara e muito valiosa.",
    challenge: "Pode evitar conflitos necessários e priorizar o bem-estar coletivo acima dos resultados.",
    needs:     "Segurança emocional, reconhecimento coletivo e um ambiente onde as pessoas se sintam incluídas.",
    value:     "Você mantém a cultura viva. Sem pessoas como você, os melhores times se desfazem."
  },
  O: {
    name: "Lobo", artigo: "um", emoji: "🐺", color: "#52B788", motto: '"Fazer Certo"',
    //lottie: "https://assets9.lottiefiles.com/packages/lf20_ysas1lcp.json",
    lottie: "public/animations/lobo.json",
    traits: ["Detalhista", "Organizado", "Estratégico", "Pontual", "Confiável", "Metódico"],
    strength:  "Você garante que as coisas funcionem de verdade. Sua precisão entrega qualidade onde outros entregariam aproximação.",
    challenge: "Pode resistir a mudanças e se tornar excessivamente cauteloso em momentos que pedem velocidade.",
    needs:     "Clareza nas regras, processos definidos e espaço para fazer com excelência.",
    value:     "Você é a base que sustenta tudo. Sem o Lobo, o castelo bonito da equipe racha no primeiro vento."
  },
  A: {
    name: "Tubarão", artigo: "um", emoji: "🦈", color: "#E63946", motto: '"Fazer Rápido"',
    //lottie: "https://assets4.lottiefiles.com/packages/lf20_lbx0qk1v.json",
    lottie: "public/animations/tubarao.json",
    traits: ["Determinado", "Impulsivo", "Prático", "Iniciativo", "Autossuficiente", "Competitivo"],
    strength:  "Você age quando outros ainda estão pensando. Sua capacidade de avançar com velocidade transforma planos em resultados reais.",
    challenge: "Pode atropelar processos e pessoas no caminho — e ter dificuldade em delegar o controle.",
    needs:     "Autonomia, variedade de desafios e a liberdade de competir e vencer.",
    value:     "Você coloca o time em movimento. Sem o Tubarão, as melhores ideias ficam para sempre no papel."
  }
};

/* Mapa de IDs Lottie para os ícones da intro */
const lottieIntroIds = {
  I: "lottie-aguia-intro",
  C: "lottie-gato-intro",
  O: "lottie-lobo-intro",
  A: "lottie-tubarao-intro"
};
