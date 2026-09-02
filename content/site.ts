/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF CONTENT
 * ─────────────────────────────────────────────────────────────────────────────
 *  All site copy lives here, in PT and EN. No component has hardcoded copy:
 *  to change the site, change this file.
 *
 *  CONTENT PROVENANCE
 *   ✔ Profile, experience, education and the Gerencert case come from
 *     LinkedIn (linkedin.com/in/robsoncsouza), as of 2026-08-31.
 *   ⚠ YellowJobs and Moosy are NOT on LinkedIn. Those two cases are drafts
 *     and are marked with "TODO:". Review before treating them as fact.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const LANGS = ['pt', 'en'] as const;
export type Lang = (typeof LANGS)[number];
export type L<T = string> = Record<Lang, T>;

/* ───────────────────────────────── profile ───────────────────────────────── */

export type SkillIcon = 'server' | 'monitor' | 'cloud' | 'activity' | 'database' | 'sparkles' | 'layers';

export type SkillGroup = {
  group: L;
  icon: SkillIcon;
  items: string[];
  /** Marks the group as the primary stack (renders a badge next to the title). */
  primary?: boolean;
};

export const profile = {
  name: 'Robson Costa',
  initials: 'RC',
  role: {
    pt: 'Engenheiro de Software Sênior',
    en: 'Senior Software Engineer',
  } satisfies L,
  specialties: {
    pt: 'Node.js · AWS · Java · Sistemas distribuídos · Engenharia assistida por IA',
    en: 'Node.js · AWS · Java · Distributed systems · AI-assisted engineering',
  } satisfies L,
  tagline: {
    pt: 'Mais de 10 anos construindo e modernizando sistemas críticos de alta disponibilidade em bancos, fintechs, consultorias e SaaS. Hoje lidero tecnicamente plataformas financeiras no Itaú Unibanco.',
    en: 'Over 10 years building and modernizing critical, high-availability systems across banks, fintechs, consultancies and SaaS. Today I technically lead financial platforms at Itaú Unibanco.',
  } satisfies L,
  location: {
    pt: 'São Paulo, Brasil',
    en: 'São Paulo, Brazil',
  } satisfies L,
  email: 'robson.rsnomad@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/robsoncsouza/',
    github: 'https://github.com/robsonx4',
  },
  bio: {
    pt: [
      'Sou engenheiro de software sênior com mais de 10 anos de experiência construindo e modernizando sistemas escaláveis e de alta disponibilidade em bancos, fintechs, consultorias e plataformas SaaS.',
      'Hoje, no Itaú Unibanco (o maior banco comercial privado da América Latina), atuo na evolução de plataformas críticas de custódia de ativos e operações de crédito: sistemas distribuídos, orientados a eventos, com operação 24/7. Lidero tecnicamente um time de mais de 15 pessoas sem abrir mão do trabalho hands-on em arquitetura, código e revisão técnica.',
      'Antes disso, cofundei o Gerencert, um SaaS de gestão de certificados digitais usado por autoridades de registro em todo o Brasil, onde o atendimento de venda caiu de 8 minutos para 40 segundos. Essa combinação de sistema crítico de banco com produto tocado do zero é o que eu trago para cada projeto.',
      'Também lidero a adoção de workflows de engenharia assistida por IA (Claude Code, Devin, abordagens multiagentes e Spec-Driven Development), acelerando análise técnica, implementação e preparação para produção.',
    ],
    en: [
      'I am a senior software engineer with over 10 years of experience building and modernizing scalable, high-availability systems across banks, fintechs, consultancies and SaaS platforms.',
      'Today, at Itaú Unibanco (Latin America’s largest private commercial bank), I work on the evolution of critical asset-custody and credit platforms: distributed, event-driven systems running 24/7. I technically lead a team of 15+ people while staying hands-on in architecture, code and technical reviews.',
      'Before that I co-founded Gerencert, a SaaS for digital-certificate management used by registration authorities across Brazil, where sales handling time dropped from 8 minutes to 40 seconds. That combination of critical banking systems with a product built from zero is what I bring to every project.',
      'I also lead the adoption of AI-assisted engineering workflows (Claude Code, Devin, multi-agent approaches and Spec-Driven Development), speeding up technical analysis, implementation and production readiness.',
    ],
  } satisfies L<string[]>,
  stats: [
    { value: '10+', label: { pt: 'anos de engenharia de software', en: 'years of software engineering' } satisfies L },
    { value: '2', label: { pt: 'formações acadêmicas: graduação e pós', en: 'academic degrees: bachelor’s and postgraduate' } satisfies L },
  ],
  skills: [
    {
      group: { pt: 'Back-end', en: 'Back-end' } satisfies L,
      icon: 'server',
      primary: true,
      items: ['Node.js', 'TypeScript', 'Java', 'Spring Boot', 'Python', 'REST APIs'],
    },
    {
      group: { pt: 'Front-end', en: 'Front-end' } satisfies L,
      icon: 'monitor',
      items: ['Angular', 'React'],
    },
    {
      group: { pt: 'Cloud & Infra', en: 'Cloud & Infra' } satisfies L,
      icon: 'cloud',
      items: ['AWS', 'Azure', 'GCP', 'Terraform', 'Docker', 'CI/CD', 'Cloudflare'],
    },
    {
      group: { pt: 'Confiabilidade', en: 'Reliability' } satisfies L,
      icon: 'activity',
      items: ['Datadog', 'Grafana'],
    },
    {
      group: { pt: 'Dados', en: 'Data' } satisfies L,
      icon: 'database',
      items: ['SQL', 'NoSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'PostgreSQL', 'MySQL'],
    },
    {
      group: { pt: 'Engenharia assistida por IA', en: 'AI-assisted engineering' } satisfies L,
      icon: 'sparkles',
      items: ['Claude Code', 'SDD', 'Multiagentes', 'Devin', 'GitHub Copilot'],
    },
    {
      group: { pt: 'Arquitetura', en: 'Architecture' } satisfies L,
      icon: 'layers',
      items: ['Hexagonal', 'Clean Architecture', 'Microserviços'],
    },
  ] as SkillGroup[],
};

/* ────────────────────────── experience ─────────────────────── */

export type Job = {
  company: string;
  role: L;
  period: L;
  summary: L;
  tech?: string[];
};

export const experience: Job[] = [
  {
    company: 'Itaú Unibanco',
    role: { pt: 'Software Engineering Coordinator', en: 'Software Engineering Coordinator' },
    period: { pt: 'jun 2025 até hoje', en: 'Jun 2025 to present' },
    summary: {
      pt: 'Liderança técnica de um time de 15+ pessoas na entrega de iniciativas estratégicas em plataformas financeiras críticas (custódia de ativos PF), com atuação hands-on em arquitetura, revisão técnica e evolução de sistemas distribuídos orientados a eventos na AWS.',
      en: 'Technical leadership of a 15+ person team delivering strategic initiatives on critical financial platforms (retail asset custody), staying hands-on in architecture, technical reviews and the evolution of event-driven distributed systems on AWS.',
    },
    tech: ['AWS', 'Java', 'Spring Boot', 'Python', 'Terraform', 'Datadog', 'CI/CD'],
  },
  {
    company: 'Itaú Unibanco',
    role: { pt: 'Senior Software Engineer', en: 'Senior Software Engineer' },
    period: { pt: 'set 2022 a jun 2025', en: 'Sep 2022 to Jun 2025' },
    summary: {
      pt: 'Modernização das plataformas de custódia de ativos de pessoa física, com adoção de arquiteturas escaláveis para fluxos financeiros críticos. As melhorias de observabilidade e monitoração contribuíram para 254 dias consecutivos sem incidente de negócio.',
      en: 'Modernization of retail asset-custody platforms, adopting scalable architectures for critical financial flows. Observability and monitoring improvements contributed to 254 consecutive days with no business incident.',
    },
    tech: ['AWS', 'Java', 'Spring Boot', 'Kafka', 'Terraform', 'Datadog'],
  },
  {
    company: 'Keep.i · Real Time Dashboards',
    role: { pt: 'Senior Software Engineer', en: 'Senior Software Engineer' },
    period: { pt: 'mar 2021 a set 2022', en: 'Mar 2021 to Sep 2022' },
    summary: {
      pt: 'Arquitetura e desenvolvimento de uma plataforma de inteligência de marketing usada por agências, com integrações a Facebook Ads, Google Analytics, Instagram e LinkedIn e serviços de coleta escalável em Node.js e Elasticsearch.',
      en: 'Architecture and development of a marketing-intelligence platform used by agencies, with integrations to Facebook Ads, Google Analytics, Instagram and LinkedIn, plus scalable collection services in Node.js and Elasticsearch.',
    },
    tech: ['Node.js', 'Python', 'Elasticsearch', 'MongoDB', 'Redis', 'Docker'],
  },
  {
    company: 'Cerva Me',
    role: { pt: 'Cofundador', en: 'Co-founder' },
    period: { pt: 'set 2019 a nov 2021', en: 'Sep 2019 to Nov 2021' },
    summary: {
      pt: 'Clube de assinatura de cervejas artesanais, com plataforma própria de gestão de assinantes e e-commerce. Atuação em todas as frentes: produto, desenvolvimento, atendimento, logística e financeiro.',
      en: 'Craft-beer subscription club, with an in-house subscriber-management platform and e-commerce. Hands on every front: product, development, support, logistics and finance.',
    },
    tech: ['Node.js', 'MongoDB'],
  },
  {
    company: 'Gerencert',
    role: { pt: 'Cofundador & Senior Software Engineer', en: 'Co-founder & Senior Software Engineer' },
    period: { pt: 'jan 2019 a mar 2021', en: 'Jan 2019 to Mar 2021' },
    summary: {
      pt: 'Plataforma SaaS de gestão de certificados digitais, comissionamento e vendas para autoridades de registro em todo o Brasil. Do MVP à arquitetura de microserviços.',
      en: 'SaaS platform for digital-certificate management, commissioning and sales for registration authorities across Brazil. From MVP to a microservices architecture.',
    },
    tech: ['Node.js', 'AngularJS', 'MongoDB', 'Redis', 'Docker', 'AWS'],
  },
  {
    company: 'Horizon Four',
    role: { pt: 'Tech Lead', en: 'Tech Lead' },
    period: { pt: 'jun 2017 a dez 2018', en: 'Jun 2017 to Dec 2018' },
    summary: {
      pt: 'Liderança técnica e desenho de soluções em uma consultoria de software, apoiando decisões arquiteturais, escalabilidade e adoção de cloud em plataformas web e serviços backend.',
      en: 'Technical leadership and solution design at a software consultancy, supporting architectural decisions, scalability and cloud adoption across web platforms and backend services.',
    },
    tech: ['Node.js', 'TypeScript', 'AWS', 'Angular', 'PostgreSQL', 'MongoDB'],
  },
  {
    company: 'FCamara Consulting & Training',
    role: { pt: 'Software Engineer', en: 'Software Engineer' },
    period: { pt: 'ago 2016 a jun 2017', en: 'Aug 2016 to Jun 2017' },
    summary: {
      pt: 'Projetos estratégicos no time de operações críticas, desenvolvendo aplicações backend e web de alto impacto (Hashtrack, Phenix, LinkApi).',
      en: 'Strategic projects on the critical-operations team, building high-impact backend and web applications (Hashtrack, Phenix, LinkApi).',
    },
    tech: ['Node.js', 'Angular', 'MongoDB'],
  },
  {
    company: 'Perinity · Caixa Econômica Federal',
    role: { pt: 'Java Web Developer', en: 'Java Web Developer' },
    period: { pt: 'jun 2015 a ago 2016', en: 'Jun 2015 to Aug 2016' },
    summary: {
      pt: 'Desenvolvimento e manutenção de sistemas corporativos no ecossistema Java para a Caixa Econômica Federal.',
      en: 'Development and maintenance of enterprise systems in the Java ecosystem for Caixa Econômica Federal.',
    },
    tech: ['Java', 'Spring', 'Struts', 'JSF', 'Hibernate'],
  },
];

export type Education = {
  school: string;
  course: L;
  year: string;
  /** Path under public/ to the institution logo. */
  logo: string;
  logoAlt: string;
};

export const education: Education[] = [
  {
    school: 'FIAP',
    course: { pt: 'Pós-graduação em Arquitetura de Software', en: 'Postgraduate degree in Software Architecture' },
    year: '2025',
    logo: '/logos/fiap.png',
    logoAlt: 'FIAP',
  },
  {
    school: 'Universidade de Mogi das Cruzes',
    course: { pt: 'Bacharelado em Sistemas de Informação', en: 'BSc in Information Systems' },
    year: '2017',
    logo: '/logos/umc.png',
    logoAlt: 'UMC, Universidade de Mogi das Cruzes',
  },
];
export type Certification = {
  name: string;
  issuer: string;
  /** Path under public/ to the official badge. */
  badge: string;
};

export const certifications: Certification[] = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    badge: '/logos/aws-saa.png',
  },
];

/* ──────────────────────────────── projects ──────────────────────────────── */

export type Project = {
  slug: string;
  name: string;
  /** Keep language-neutral: rendered as-is in PT and EN. */
  year: string;
  status: L;
  tagline: L;
  summary: L;
  role: L;
  tags: string[];
  theme: { from: string; to: string; ring: string };
  url?: string;
  repo?: string;
  context: L;
  challenges: L<string[]>;
  approach: { title: L; body: L }[];
  architecture: { layer: L; detail: L }[];
  stack: { group: L; items: string[] }[];
  results: { value: string; label: L }[];
  learnings: L<string[]>;
};

export const projects: Project[] = [
  /* ═══════════════════════════════ Gerencert ═══════════════════════════════
   * Content confirmed from LinkedIn.
   * ═════════════════════════════════════════════════════════════════════════ */
  {
    slug: 'gerencert',
    name: 'Gerencert',
    year: '2019-2021',
    status: { pt: 'Cofundador', en: 'Co-founder' },
    tagline: {
      pt: 'SaaS de gestão de certificados digitais, comissionamento e vendas para autoridades de registro em todo o Brasil.',
      en: 'SaaS for digital-certificate management, commissioning and sales, used by registration authorities across Brazil.',
    },
    summary: {
      pt: 'O Gerencert nasceu de um gargalo muito concreto: emitir um certificado digital envolve conferência de documento, agendamento, videoconferência de validação, cobrança e comissionamento. Nas autoridades de registro isso era feito em planilha, sistema de terceiro e WhatsApp. Cada atendimento de venda levava cerca de 8 minutos. A plataforma reorganizou esse fluxo inteiro e derrubou o tempo para 40 segundos.',
      en: 'Gerencert came out of a very concrete bottleneck: issuing a digital certificate involves document checks, scheduling, a validation video call, billing and commissioning. At registration authorities all of that ran on spreadsheets, third-party systems and WhatsApp. Each sales interaction took around 8 minutes. The platform reorganized the whole flow and cut that to 40 seconds.',
    },
    role: {
      pt: 'Cofundador, arquitetura e desenvolvimento full-stack',
      en: 'Co-founder, architecture and full-stack development',
    },
    tags: ['Node.js', 'AngularJS', 'MongoDB', 'Microserviços', 'AWS', 'Docker'],
    theme: { from: 'from-emerald-400/20', to: 'to-teal-500/5', ring: 'ring-emerald-400/30' },
    context: {
      pt: 'Autoridades de registro são as empresas que, credenciadas por uma autoridade certificadora, fazem o atendimento presencial ou por vídeo para emitir certificados digitais. O negócio delas é volume de atendimento e rede de parceiros, e as duas coisas estavam sem software. O controle de venda ficava em planilha, a comissão do parceiro era calculada à mão e o histórico do cliente se perdia entre sistemas.',
      en: 'Registration authorities are the companies accredited by a certificate authority to run the in-person or video sessions that issue digital certificates. Their business is interaction volume and a partner network, and neither had software behind it. Sales tracking lived in spreadsheets, partner commissions were computed by hand, and customer history was scattered across systems.',
    },
    challenges: {
      pt: [
        'Encurtar drasticamente o atendimento de venda sem perder nenhum dado exigido pelo processo de emissão.',
        'Calcular comissionamento de uma rede de parceiros de forma automática e auditável.',
        'Cobrar de verdade: pagamento recorrente integrado a múltiplos gateways brasileiros, cada um com sua própria idiossincrasia.',
        'Evoluir o MVP para uma arquitetura que suportasse crescimento nacional, sem parar a operação de quem já usava.',
        'Manter e operar toda a infraestrutura com um time de fundadores, sem equipe dedicada de infra.',
      ],
      en: [
        'Drastically shorten the sales interaction without losing any data the issuing process requires.',
        'Compute partner-network commissions automatically and auditably.',
        'Actually charge customers: recurring payments across multiple Brazilian gateways, each with its own quirks.',
        'Grow the MVP into an architecture that could support nationwide usage without disrupting existing customers.',
        'Run the whole infrastructure with a founding team, without a dedicated infra squad.',
      ],
    },
    approach: [
      {
        title: { pt: 'MVP primeiro, arquitetura depois', en: 'MVP first, architecture later' },
        body: {
          pt: 'A primeira versão foi deliberadamente simples: AngularJS, Node.js e MongoDB, monolito, entregue rápido para validar com autoridades de registro reais. Só depois que o fluxo provou valor é que investimos em decomposição. A ordem inversa teria custado meses antes da primeira venda.',
          en: 'The first version was deliberately simple: AngularJS, Node.js and MongoDB, a monolith, shipped fast to validate with real registration authorities. Only once the flow had proven its value did we invest in decomposition. The reverse order would have cost months before the first sale.',
        },
      },
      {
        title: { pt: 'Redesenho do atendimento: 8 minutos → 40 segundos', en: 'Redesigning the interaction: 8 minutes → 40 seconds' },
        body: {
          pt: 'O ganho veio de cortar passos do processo: dados do cliente puxados uma vez e reaproveitados, formulário reduzido ao que a emissão realmente exige, seleção de produto e cobrança na mesma tela, e comissionamento calculado como consequência da venda em vez de tarefa separada. Menos de um minuto por atendimento, contra oito.',
          en: 'The gain came from removing steps: customer data pulled once and reused, the form trimmed to what issuance actually requires, product selection and billing on the same screen, and commissioning computed as a consequence of the sale rather than a separate chore. Under a minute per interaction, against eight.',
        },
      },
      {
        title: { pt: 'Pagamentos integrados a múltiplos gateways', en: 'Payments across multiple gateways' },
        body: {
          pt: 'Construí os serviços de pagamento com suporte a cobrança recorrente e a mais de um gateway brasileiro, atrás de uma interface única. Isso deu poder de negociação comercial e resiliência: gateway instável deixou de ser incidente de produto.',
          en: 'I built the payment services with recurring billing and support for more than one Brazilian gateway behind a single interface. That gave commercial negotiating power and resilience: an unstable gateway stopped being a product incident.',
        },
      },
      {
        title: { pt: 'Migração para microserviços com foco em resiliência', en: 'Move to microservices, aimed at resilience' },
        body: {
          pt: 'Com tração, a plataforma foi decomposta em serviços por domínio (cadastro, vendas, comissionamento, pagamentos), isolando falha e permitindo escalar apenas o que precisava. A decomposição foi incremental, serviço a serviço, com a operação rodando o tempo todo.',
          en: 'With traction, the platform was decomposed into domain services (accounts, sales, commissioning, payments), isolating failure and letting us scale only what needed it. The decomposition was incremental, one service at a time, with the operation running throughout.',
        },
      },
      {
        title: { pt: 'Infra e segurança tocadas pelos fundadores', en: 'Infra and security run by the founders' },
        body: {
          pt: 'Toda a nuvem foi gerenciada por nós: Docker para padronizar o runtime, EC2 e Lambda para execução, S3 e CloudFront para entrega de arquivo e front-end, e Cloudflare na borda para TLS, cache e proteção. Simples o bastante para ser operado por quem também escrevia o produto.',
          en: 'We ran the entire cloud ourselves: Docker to standardize the runtime, EC2 and Lambda for execution, S3 and CloudFront for file and front-end delivery, and Cloudflare at the edge for TLS, caching and protection. Simple enough to be operated by the same people writing the product.',
        },
      },
    ],
    architecture: [
      { layer: { pt: 'Front-end', en: 'Front-end' }, detail: { pt: 'SPA em AngularJS servida por S3 + CloudFront, com o fluxo de atendimento em tela única.', en: 'AngularJS SPA served from S3 + CloudFront, with the sales flow on a single screen.' } },
      { layer: { pt: 'Serviços', en: 'Services' }, detail: { pt: 'Microserviços Node.js por domínio: cadastro, vendas, comissionamento e pagamentos.', en: 'Node.js microservices by domain: accounts, sales, commissioning and payments.' } },
      { layer: { pt: 'Pagamentos', en: 'Payments' }, detail: { pt: 'Camada de abstração sobre múltiplos gateways brasileiros, com cobrança recorrente.', en: 'Abstraction layer over multiple Brazilian gateways, with recurring billing.' } },
      { layer: { pt: 'Dados', en: 'Data' }, detail: { pt: 'MongoDB como armazenamento principal e Redis para cache e sessão.', en: 'MongoDB as primary storage and Redis for cache and sessions.' } },
      { layer: { pt: 'Infra', en: 'Infra' }, detail: { pt: 'Docker, AWS (EC2, Lambda, S3, CloudFront) e Cloudflare na borda para TLS e proteção.', en: 'Docker, AWS (EC2, Lambda, S3, CloudFront) and Cloudflare at the edge for TLS and protection.' } },
    ],
    stack: [
      { group: { pt: 'Front-end', en: 'Front-end' }, items: ['AngularJS', 'JavaScript', 'HTML/CSS'] },
      { group: { pt: 'Back-end', en: 'Back-end' }, items: ['Node.js', 'MongoDB', 'Redis', 'Microserviços'] },
      { group: { pt: 'Infra', en: 'Infra' }, items: ['Docker', 'AWS EC2', 'AWS Lambda', 'S3', 'CloudFront', 'Cloudflare'] },
    ],
    results: [
      { value: '40s', label: { pt: 'de atendimento de venda, contra 8 minutos antes', en: 'per sales interaction, down from 8 minutes' } },
      { value: '~92%', label: { pt: 'de ganho de eficiência na operação de vendas', en: 'efficiency gain in the sales operation' } },
      { value: 'Brasil', label: { pt: 'autoridades de registro atendidas em todo o país', en: 'registration authorities served nationwide' } },
    ],
    learnings: {
      pt: [
        'Ganho de eficiência quase nunca está no código. Estava em remover passos do processo, não em otimizar o que já existia.',
        'Monolito primeiro foi a decisão certa. Microserviço antes de tração é custo de operação sem receita para pagá-lo.',
        'Integração de pagamento precisa de abstração desde o primeiro gateway, porque o segundo sempre chega, e chega com pressa.',
        'Decompor com a operação rodando só funciona se cada corte tiver caminho de volta. Sem rollback por serviço, migração de arquitetura vira aposta.',
      ],
      en: [
        'Efficiency gains are almost never in the code. Ours came from removing process steps, not from optimizing what was already there.',
        'Monolith first was the right call. Microservices before traction is operational cost with no revenue to pay for it.',
        'Payment integration needs an abstraction from the very first gateway, because the second one always arrives, and it always arrives in a hurry.',
        'Decomposing while the operation runs only works if every cut has a way back. With no per-service rollback, an architecture migration is a bet.',
      ],
    },
  },

  /* ═══════════════════════════════ YellowJobs ═══════════════════════════════
   * TODO: this case is a DRAFT and was not on LinkedIn. Review context,
   * challenges, decisions and, above all, the numbers in `results`.
   * ═════════════════════════════════════════════════════════════════════════ */
  {
    slug: 'yellowjobs',
    name: 'YellowJobs',
    year: '2024 →',
    status: { pt: 'Em produção', en: 'In production' },
    tagline: {
      pt: 'Plataforma de vagas que conecta candidatos e empresas sem o ruído dos grandes portais.',
      en: 'A job platform connecting candidates and companies without the noise of the big portals.',
    },
    summary: {
      pt: 'YellowJobs nasceu de uma constatação simples: os portais de vaga otimizam para volume, não para encaixe. Candidato recebe dezenas de vagas que não servem, recrutador recebe centenas de currículos que não servem. A plataforma inverte a lógica: cadastro estruturado dos dois lados, matching por critérios explícitos e um fluxo de candidatura curto o bastante para ser terminado no celular.',
      en: 'YellowJobs came out of a simple observation: job portals optimize for volume, not fit. Candidates get dozens of postings that do not fit, recruiters get hundreds of résumés that do not fit. The platform flips that: structured profiles on both sides, matching on explicit criteria, and an application flow short enough to finish on a phone.',
    },
    role: {
      pt: 'Especificação, back-end, front-end e infraestrutura',
      en: 'Spec, back-end, front-end and infrastructure',
    },
    tags: ['Node.js', 'TypeScript', 'MongoDB', 'React', 'Docker', 'AWS'],
    theme: { from: 'from-amber-400/20', to: 'to-yellow-500/5', ring: 'ring-amber-400/30' },
    context: {
      pt: 'Recrutadores de pequenas e médias empresas não têm ATS. Gerenciam processo seletivo em planilha e caixa de e-mail, perdem candidato por falta de resposta e não conseguem medir nada: quantos entraram, onde pararam, por que desistiram. Do outro lado, o candidato envia a candidatura e nunca sabe se alguém abriu seu currículo.',
      en: 'Recruiters at small and mid-sized companies have no ATS. They run hiring in a spreadsheet and an inbox, lose candidates to unanswered e-mails, and can measure nothing: how many applied, where they dropped, why they gave up. On the other side, candidates send an application and never learn whether anyone opened their résumé.',
    },
    challenges: {
      pt: [
        'Modelar vaga, candidatura e perfil de forma que o matching fosse consultável, e não um campo de texto livre.',
        'Manter o fluxo de candidatura curto sem perder os dados que o recrutador realmente precisa para decidir.',
        'Dar visibilidade de estágio (triagem → entrevista → oferta) sem transformar a ferramenta num CRM pesado.',
        'Rodar barato: o produto precisa se pagar antes de escalar.',
      ],
      en: [
        'Modeling job, application and profile so that matching is queryable instead of a free-text blob.',
        'Keeping the application flow short without losing the data recruiters actually need to decide.',
        'Giving pipeline visibility (screening → interview → offer) without turning the tool into a heavy CRM.',
        'Running cheap: the product has to pay for itself before it scales.',
      ],
    },
    approach: [
      {
        title: { pt: 'Especificação antes de código', en: 'Spec before code' },
        body: {
          pt: 'A demanda foi escrita como documento: personas, o passo a passo do candidato, o passo a passo do recrutador e regras de negócio explícitas (quem pode ver o quê, o que torna uma vaga válida, o que encerra uma candidatura). Só depois foi quebrada em issues independentes de back-end, front-end e infra.',
          en: 'The demand was written as a document first: personas, the candidate’s steps, the recruiter’s steps and explicit business rules (who sees what, what makes a posting valid, what closes an application). Only then was it broken into independent back-end, front-end and infra issues.',
        },
      },
      {
        title: { pt: 'Domínio isolado da infraestrutura', en: 'Domain isolated from infrastructure' },
        body: {
          pt: 'O back-end segue Clean Architecture: entidades e casos de uso não conhecem Express nem Mongoose. As regras (“vaga expirada não aceita candidatura”, “candidato não se candidata duas vezes”) vivem em use cases testáveis sem subir banco.',
          en: 'The back-end follows Clean Architecture: entities and use cases know nothing about Express or Mongoose. The rules ("an expired posting takes no applications", "a candidate cannot apply twice") live in use cases testable without a database.',
        },
      },
      {
        title: { pt: 'Matching como consulta, não como IA', en: 'Matching as a query, not as AI' },
        body: {
          pt: 'Em vez de prometer inteligência artificial, o matching é um pipeline de agregação sobre campos estruturados: senioridade, stack, faixa salarial, modelo de trabalho e localização. É explicável, rápido e o recrutador entende por que aquele candidato apareceu.',
          en: 'Rather than promising AI, matching is an aggregation pipeline over structured fields: seniority, stack, salary band, work model and location. It is explainable, fast, and the recruiter understands why a given candidate showed up.',
        },
      },
      {
        title: { pt: 'Candidatura em uma tela', en: 'One-screen application' },
        body: {
          pt: 'O perfil do candidato é preenchido uma vez. Candidatar-se é uma confirmação, não um formulário. Isso ataca o abandono no meio do fluxo, que é onde o funil mais perde gente.',
          en: 'The candidate profile is filled in once. Applying is a confirmation, not a form. That attacks mid-flow abandonment, where the funnel loses the most people.',
        },
      },
      {
        title: { pt: 'Deploy containerizado e reprodutível', en: 'Containerized, reproducible deploy' },
        body: {
          pt: 'API, front-end e banco sobem por Docker Compose, com build multi-stage para imagens enxutas e proxy reverso com TLS. O mesmo compose roda local e na AWS, então o que quebraria em produção quebra antes, no desenvolvimento.',
          en: 'API, front-end and database come up through Docker Compose, with multi-stage builds for lean images and a TLS reverse proxy. The same compose runs locally and on AWS, so whatever would break in production breaks earlier, in development.',
        },
      },
    ],
    architecture: [
      { layer: { pt: 'Domínio', en: 'Domain' }, detail: { pt: 'Entidades Vaga, Candidato, Empresa e Candidatura, com invariantes validadas na própria entidade.', en: 'Job, Candidate, Company and Application entities, with invariants validated inside the entity itself.' } },
      { layer: { pt: 'Casos de uso', en: 'Use cases' }, detail: { pt: 'Um caso de uso por ação de negócio, dependente apenas de interfaces de repositório.', en: 'One use case per business action, depending only on repository interfaces.' } },
      { layer: { pt: 'Adaptadores', en: 'Adapters' }, detail: { pt: 'Controllers Express finos + repositórios Mongoose implementando as interfaces do domínio.', en: 'Thin Express controllers + Mongoose repositories implementing the domain interfaces.' } },
      { layer: { pt: 'Interface', en: 'Interface' }, detail: { pt: 'SPA React consumindo a API REST, com estados de carregamento e erro tratados por rota.', en: 'React SPA consuming the REST API, with loading and error states handled per route.' } },
      { layer: { pt: 'Infra', en: 'Infra' }, detail: { pt: 'Docker Compose, proxy reverso com TLS, AWS, backup agendado e logs centralizados.', en: 'Docker Compose, TLS reverse proxy, AWS, scheduled backups and centralized logs.' } },
    ],
    stack: [
      { group: { pt: 'Back-end', en: 'Back-end' }, items: ['Node.js', 'TypeScript', 'Express', 'MongoDB', 'JWT', 'Jest'] },
      { group: { pt: 'Front-end', en: 'Front-end' }, items: ['React', 'TypeScript', 'Tailwind CSS'] },
      { group: { pt: 'Infra', en: 'Infra' }, items: ['Docker', 'Docker Compose', 'AWS', 'CI/CD'] },
    ],
    // TODO: replace with the project's real numbers.
    results: [
      { value: '1 tela', label: { pt: 'para concluir uma candidatura', en: 'to complete an application' } },
      { value: '?', label: { pt: 'TODO: latência da busca com filtros', en: 'TODO: filtered-search latency' } },
      { value: '?', label: { pt: 'TODO: cobertura de teste ou volume de uso', en: 'TODO: test coverage or usage volume' } },
    ],
    learnings: {
      pt: [
        'Campo estruturado vence campo livre. Todo dado que vira texto solto é um filtro que você não vai conseguir construir depois.',
        'Clean Architecture só compensa quando as regras de negócio são muitas. Aqui são, e trocar detalhe de persistência sai de graça.',
        'Explicabilidade é feature: recrutador confia no ranking quando entende o critério.',
      ],
      en: [
        'Structured fields beat free text. Every piece of data that becomes loose prose is a filter you will not be able to build later.',
        'Clean Architecture only pays off when there are many business rules. Here there are, and swapping persistence details costs nothing.',
        'Explainability is a feature: recruiters trust the ranking when they understand the criteria.',
      ],
    },
  },

  /* ═════════════════════════════════ Moosy ═════════════════════════════════
   * TODO: this case is a DRAFT and was not on LinkedIn. Review everything,
   * especially what Moosy actually does and the numbers in `results`.
   * ═════════════════════════════════════════════════════════════════════════ */
  {
    slug: 'moosy',
    name: 'Moosy',
    year: '2024 →',
    status: { pt: 'Em produção', en: 'In production' },
    tagline: {
      pt: 'Aplicativo mobile em React Native, construído para funcionar bem também quando a conexão não colabora.',
      en: 'React Native mobile app, built to work well even when the connection does not cooperate.',
    },
    summary: {
      pt: 'Moosy é o produto mobile do conjunto. A restrição que definiu quase todas as decisões técnicas foi a rede: os usuários abrem o app em movimento, em conexão instável, e abandonam quando a tela demora a carregar. A resposta foi uma arquitetura offline-first, com cache local como fonte de verdade da UI e sincronização em segundo plano.',
      en: 'Moosy is the mobile product in the set. The constraint that drove nearly every technical decision was the network: users open the app on the move, on flaky connections, and leave when the screen takes too long to load. The answer was an offline-first architecture, with the local cache as the UI’s source of truth and background synchronization.',
    },
    role: {
      pt: 'Arquitetura mobile, desenvolvimento e publicação',
      en: 'Mobile architecture, development and release',
    },
    tags: ['React Native', 'TypeScript', 'Offline-first', 'Node.js', 'Push'],
    theme: { from: 'from-violet-400/20', to: 'to-fuchsia-500/5', ring: 'ring-violet-400/30' },
    context: {
      pt: 'O fluxo que o Moosy resolve acontecia no celular, mas fora do software: mensagem, foto e anotação solta. Nada ficava registrado de forma consultável, e quem precisava do histórico depois tinha que reconstruir a partir de conversa. O app existe para transformar essa rotina em dado.',
      en: 'The flow Moosy handles already happened on the phone, just outside any software: messages, photos and loose notes. Nothing was recorded in a queryable way, and whoever needed the history later had to reconstruct it from chat threads. The app exists to turn that routine into data.',
    },
    challenges: {
      pt: [
        'Funcionar sem rede: registrar, editar e consultar offline, e reconciliar depois sem duplicar nem perder registro.',
        'Manter listas longas fluidas em aparelhos Android modestos, que são a maioria da base.',
        'Compartilhar as regras de negócio com a API sem duplicar validação em duas bases de código.',
        'Publicar nas lojas com um processo repetível: build assinado, versionamento e changelog.',
      ],
      en: [
        'Working offline: create, edit and browse with no network, then reconcile without duplicating or losing records.',
        'Keeping long lists smooth on modest Android devices, which make up most of the base.',
        'Sharing business rules with the API without duplicating validation across two codebases.',
        'Shipping to the stores with a repeatable process: signed builds, versioning and changelog.',
      ],
    },
    approach: [
      {
        title: { pt: 'Offline-first de verdade', en: 'Genuinely offline-first' },
        body: {
          pt: 'A UI nunca lê da rede. Ela lê do armazenamento local, que é atualizado por um sincronizador. Cada registro carrega estado de sincronização e carimbo de tempo; o conflito é resolvido por regra explícita, não por “o último que chegou ganha” silencioso. O usuário vê um indicador honesto de pendência.',
          en: 'The UI never reads from the network. It reads from local storage, which a synchronizer updates. Every record carries a sync state and a timestamp; conflicts resolve through an explicit rule, not a silent last-write-wins. The user sees an honest pending indicator.',
        },
      },
      {
        title: { pt: 'Fila de operações idempotente', en: 'Idempotent operation queue' },
        body: {
          pt: 'Ações offline entram numa fila persistente com id gerado no cliente. Quando a rede volta, a fila drena em ordem e a API trata id repetido como no-op. Isso torna o retry seguro, e retry acontece o tempo todo em rede móvel.',
          en: 'Offline actions enter a persistent queue with a client-generated id. When the network returns, the queue drains in order and the API treats a repeated id as a no-op. That makes retries safe, and on mobile networks retries happen constantly.',
        },
      },
      {
        title: { pt: 'Performance como requisito, não polimento', en: 'Performance as a requirement, not polish' },
        body: {
          pt: 'Listas virtualizadas com altura conhecida, memoização nos itens, imagens redimensionadas antes do upload e navegação sem re-render em cascata. O alvo foi manter interação fluida no aparelho mais fraco da base, não no aparelho do desenvolvedor.',
          en: 'Virtualized lists with known item height, memoized rows, images resized before upload and navigation free of cascading re-renders. The target was smooth interaction on the weakest device in the base, not on the developer’s phone.',
        },
      },
      {
        title: { pt: 'Regras no servidor, feedback no cliente', en: 'Rules on the server, feedback on the client' },
        body: {
          pt: 'A validação canônica mora na API, em TypeScript compartilhado por tipos. O app valida por antecipação para dar feedback imediato, mas nunca é a autoridade. Isso evita divergência entre o que o app aceita e o que o servidor grava.',
          en: 'Canonical validation lives in the API, in TypeScript shared through types. The app validates optimistically for instant feedback but is never the authority. That prevents drift between what the app accepts and what the server stores.',
        },
      },
      {
        title: { pt: 'Release repetível', en: 'Repeatable release' },
        body: {
          pt: 'Build de release automatizado, versionamento semântico amarrado ao changelog e canal de teste interno antes de qualquer publicação ampla. Subir versão deixou de ser um evento.',
          en: 'Automated release builds, semantic versioning tied to the changelog, and an internal test track before any wide rollout. Shipping a version stopped being an event.',
        },
      },
    ],
    architecture: [
      { layer: { pt: 'Apresentação', en: 'Presentation' }, detail: { pt: 'Telas React Native com React Navigation; componentes sem acesso direto a rede.', en: 'React Native screens with React Navigation; components never touch the network directly.' } },
      { layer: { pt: 'Estado', en: 'State' }, detail: { pt: 'Store tipada como espelho do cache local, com seletores memoizados.', en: 'Typed store mirroring the local cache, with memoized selectors.' } },
      { layer: { pt: 'Persistência local', en: 'Local persistence' }, detail: { pt: 'Armazenamento no dispositivo + fila de operações pendentes com id de cliente.', en: 'On-device storage + pending-operation queue with client-side ids.' } },
      { layer: { pt: 'Sincronização', en: 'Sync' }, detail: { pt: 'Sincronizador em segundo plano, com backoff exponencial e resolução de conflito explícita.', en: 'Background synchronizer with exponential backoff and explicit conflict resolution.' } },
      { layer: { pt: 'API', en: 'API' }, detail: { pt: 'Node.js + TypeScript, endpoints idempotentes e notificações push.', en: 'Node.js + TypeScript, idempotent endpoints and push notifications.' } },
    ],
    stack: [
      { group: { pt: 'Mobile', en: 'Mobile' }, items: ['React Native', 'TypeScript', 'React Navigation', 'Push notifications'] },
      { group: { pt: 'Back-end', en: 'Back-end' }, items: ['Node.js', 'TypeScript', 'Express', 'MongoDB'] },
      { group: { pt: 'Qualidade', en: 'Quality' }, items: ['Jest', 'React Native Testing Library'] },
    ],
    // TODO: replace with the project's real numbers.
    results: [
      { value: '0', label: { pt: 'telas que dependem de rede para abrir', en: 'screens that need the network to open' } },
      { value: 'iOS + Android', label: { pt: 'a partir de uma base de código', en: 'from a single codebase' } },
      { value: '?', label: { pt: 'TODO: usuários ativos ou volume de registros', en: 'TODO: active users or record volume' } },
    ],
    learnings: {
      pt: [
        'Offline-first é decisão de arquitetura, não uma camada que se adiciona depois. Retrofitar cache num app online-first custa mais que reescrever.',
        'Idempotência no servidor é o que torna o cliente móvel simples: sem ela, toda retentativa vira uma regra de negócio nova.',
      ],
      en: [
        'Offline-first is an architectural decision, not a layer you bolt on later. Retrofitting a cache into an online-first app costs more than a rewrite.',
        'Server-side idempotency is what keeps the mobile client simple: without it, every retry becomes a new business rule.',
      ],
    },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
