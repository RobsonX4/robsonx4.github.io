/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF CONTENT
 * ─────────────────────────────────────────────────────────────────────────────
 *  All site copy lives here, in PT and EN. No component has hardcoded copy:
 *  to change the site, change this file.
 *
 *  CONTENT PROVENANCE
 *   ✔ Profile, experience and education come from LinkedIn
 *     (linkedin.com/in/robsoncsouza), as of 2026-08-31. The Gerencert
 *     results come from there too; its technical detail comes from the
 *     project's own documentation, read on 2026-09-02.
 *   ✔ YellowJobs and Moosy: product facts from yellowjobs.com.br and
 *     moosy.app (read on 2026-09-02); engineering narrative from Robson.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const LANGS = ['pt', 'en'] as const;
export type Lang = (typeof LANGS)[number];
export type L<T = string> = Record<Lang, T>;

/* ───────────────────────────────── profile ───────────────────────────────── */

export type SkillIcon = 'server' | 'monitor' | 'cloud' | 'activity' | 'database' | 'sparkles' | 'layers';

/** Accent color of a stack group. Mapped to classes in components/StackGrid.tsx. */
export type SkillTone = 'blue' | 'emerald' | 'sky' | 'amber' | 'violet' | 'fuchsia' | 'rose';

export type SkillGroup = {
  group: L;
  icon: SkillIcon;
  tone: SkillTone;
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
      tone: 'blue',
      primary: true,
      items: ['Node.js', 'TypeScript', 'Java', 'Spring Boot', 'Python', 'REST APIs'],
    },
    {
      group: { pt: 'Front-end', en: 'Front-end' } satisfies L,
      icon: 'monitor',
      tone: 'emerald',
      items: ['Angular', 'React'],
    },
    {
      group: { pt: 'Cloud & Infra', en: 'Cloud & Infra' } satisfies L,
      icon: 'cloud',
      tone: 'sky',
      items: ['AWS', 'Azure', 'GCP', 'Terraform', 'Docker', 'CI/CD', 'Cloudflare'],
    },
    {
      group: { pt: 'Confiabilidade', en: 'Reliability' } satisfies L,
      icon: 'activity',
      tone: 'amber',
      items: ['Datadog', 'Grafana'],
    },
    {
      group: { pt: 'Dados', en: 'Data' } satisfies L,
      icon: 'database',
      tone: 'violet',
      items: ['SQL', 'NoSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'PostgreSQL', 'MySQL'],
    },
    {
      group: { pt: 'Engenharia assistida por IA', en: 'AI-assisted engineering' } satisfies L,
      icon: 'sparkles',
      tone: 'fuchsia',
      items: ['Claude Code', 'SDD', 'Multiagentes', 'Devin', 'GitHub Copilot'],
    },
    {
      group: { pt: 'Arquitetura', en: 'Architecture' } satisfies L,
      icon: 'layers',
      tone: 'rose',
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

export type Screenshot = {
  src: string;
  alt: L;
  kind?: 'wide' | 'phone';
  /** Marks the image used as cover on listings. Defaults to the first wide shot. */
  cover?: boolean;
};

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
  /** Product screens shown on the case page. `phone` renders in a narrow frame. */
  screenshots?: Screenshot[];
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
   * Product and results confirmed from LinkedIn; technical detail from the
   * project's own documentation (per-service README and CLAUDE.md,
   * specs/ and infra/), read on 2026-09-02.
   * ═════════════════════════════════════════════════════════════════════════ */
  {
    slug: 'gerencert',
    name: 'Gerencert',
    year: '2017 →',
    status: { pt: 'Cofundador', en: 'Co-founder' },
    url: 'https://gerencert.com',
    tagline: {
      pt: 'SaaS multi-tenant de venda, emissão e gestão de certificados digitais para autoridades de registro em todo o Brasil.',
      en: 'Multi-tenant SaaS for selling, issuing and managing digital certificates, used by registration authorities across Brazil.',
    },
    summary: {
      pt: 'Emitir um certificado digital envolve conferência de documento, consulta ao SPC, agendamento, videoconferência de validação, cobrança e comissionamento do parceiro. Nas autoridades de registro isso era feito em planilha, sistema de terceiro e WhatsApp, e cada atendimento de venda levava cerca de 8 minutos. O Gerencert reorganizou o fluxo inteiro e derrubou o tempo para 40 segundos. O MVP foi entregue em 2017. Em 2019 o produto ganhou continuidade e virou um SaaS, para ser comercializado com outras empresas do setor. Hoje são sete serviços em produção sobre uma fundação de infraestrutura em Terraform, com observabilidade, métricas de negócio e um fluxo de desenvolvimento conduzido por especificações e agentes de IA.',
      en: 'Issuing a digital certificate involves document checks, a credit-bureau lookup, scheduling, a validation video call, billing and partner commissioning. At registration authorities all of that ran on spreadsheets, third-party systems and WhatsApp, and each sales interaction took around 8 minutes. Gerencert reorganized the whole flow and cut that to 40 seconds. The MVP shipped in 2017. In 2019 the product was taken further and turned into a SaaS, to be sold to other companies in the sector. Today it is seven services in production on a Terraform infrastructure foundation, with observability, business metrics and a development flow driven by specifications and AI agents.',
    },
    role: {
      pt: 'Cofundador, arquitetura, desenvolvimento full-stack e infraestrutura',
      en: 'Co-founder, architecture, full-stack development and infrastructure',
    },
    tags: ['Node.js', 'AngularJS', 'MongoDB', 'AWS', 'Terraform', 'Claude Code'],
    theme: { from: 'from-emerald-400/20', to: 'to-teal-500/5', ring: 'ring-emerald-400/30' },
    screenshots: [
      { src: '/projects/gerencert/dashboard.webp', cover: true, alt: { pt: 'Painel geral do Gerencert com os atendimentos do dia e o gráfico de certificados cadastrados', en: 'Gerencert dashboard with the day’s appointments and a chart of registered certificates' } },
      { src: '/projects/gerencert/issuance.webp', alt: { pt: 'Fluxo de emissão de certificado: consulta, pagamento, agendamento e resumo', en: 'Certificate issuance flow: lookup, payment, scheduling and summary' } },
      { src: '/projects/gerencert/landing.webp', alt: { pt: 'Site do Gerencert, sistema para autoridades de registro', en: 'Gerencert website, a system for registration authorities' } },
    ],
    context: {
      pt: 'Autoridades de registro são as empresas credenciadas por uma autoridade certificadora para fazer o atendimento, presencial ou por vídeo, que emite certificados digitais. O negócio delas é volume de atendimento e rede de parceiros, e as duas coisas estavam sem software. O controle de venda ficava em planilha, a comissão do parceiro era calculada à mão e o histórico do cliente se perdia entre sistemas. O Gerencert é multi-tenant desde a base: cada empresa tem seus pontos de atendimento, e praticamente todo registro carrega a empresa e o ponto que o criou. Sobre esse modelo vieram emissão, agenda, financeiro, comissionamento, controle de vencimento e um widget de venda que os parceiros embarcam no próprio site.',
      en: 'Registration authorities are the companies accredited by a certificate authority to run the in-person or video sessions that issue digital certificates. Their business is interaction volume and a partner network, and neither had software behind it. Sales tracking lived in spreadsheets, partner commissions were computed by hand, and customer history was scattered across systems. Gerencert is multi-tenant from the ground up: each company has its own service points, and virtually every record carries the company and the point that created it. On top of that model came issuance, scheduling, finance, commissioning, expiry control and a sales widget that partners embed on their own sites.',
    },
    challenges: {
      pt: [
        'Encurtar drasticamente o atendimento de venda sem perder nenhum dado exigido pelo processo de emissão.',
        'Calcular comissionamento de uma rede de parceiros de forma automática e auditável, com isolamento por empresa e ponto de atendimento.',
        'Cobrar de verdade: pagamento por múltiplos gateways brasileiros, cada um com sua idiossincrasia, e depois assinatura recorrente do próprio SaaS.',
        'Sair de uma única máquina com contêineres para uma plataforma com escala automática e infraestrutura descrita em código, sem parar a operação de quem já usava.',
        'Enxergar o negócio: métricas de produto e KPIs de SaaS sem montar um pipeline de dados nem pagar por ingestão de métricas.',
        'Manter e evoluir sete serviços, incluindo um front-end em AngularJS, com um time de fundadores e sem equipe dedicada de infraestrutura.',
      ],
      en: [
        'Cutting sales handling time drastically without losing any data the issuance process requires.',
        'Computing partner-network commissions automatically and auditably, isolated per company and service point.',
        'Actually collecting money: payments through several Brazilian gateways, each with its own quirks, and later recurring subscriptions for the SaaS itself.',
        'Moving from a single container host to a platform with autoscaling and infrastructure described as code, without stopping the operation already running on it.',
        'Seeing the business: product metrics and SaaS KPIs without building a data pipeline or paying for metric ingestion.',
        'Maintaining and evolving seven services, including an AngularJS front-end, with a founding team and no dedicated infrastructure crew.',
      ],
    },
    approach: [
      {
        title: { pt: 'Tirar o atendimento da planilha', en: 'Getting the process out of the spreadsheet' },
        body: {
          pt: 'O ganho de 8 minutos para 40 segundos não veio de otimizar código. Veio de juntar em uma tela o que estava espalhado: consulta ao SPC, dados do titular, escolha do produto, pagamento, agendamento e resumo, nessa ordem, com o que já é conhecido preenchido. O atendente deixou de alternar entre planilha, sistema da certificadora e WhatsApp. Cada etapa do fluxo virou uma aba do mesmo formulário, e o que antes era retrabalho passou a ser confirmação.',
          en: 'Going from 8 minutes to 40 seconds did not come from optimizing code. It came from pulling into one screen what was scattered: credit-bureau lookup, holder details, product choice, payment, scheduling and summary, in that order, with everything already known pre-filled. The agent stopped switching between a spreadsheet, the certificate authority’s system and WhatsApp. Each step of the flow became a tab in the same form, and what used to be rework became confirmation.',
        },
      },
      {
        title: { pt: 'Sete serviços com responsabilidades separadas', en: 'Seven services with separate responsibilities' },
        body: {
          pt: 'O sistema é um conjunto de microserviços que conversam entre si, cada um com uma responsabilidade clara: a aplicação web usada pelas autoridades de registro, a API principal, a API e o iframe do widget de venda embarcado em sites de parceiros, a API de pagamentos e assinaturas, o portal de agenda online e as funções de emissão. A separação foi feita para facilitar manutenção: dá para evoluir o widget ou o pagamento sem tocar no núcleo, e para trocar uma peça de cada vez sem parar as outras.',
          en: 'The system is a set of microservices that talk to each other, each with a clear responsibility: the web app used by registration authorities, the main API, the API and iframe of the sales widget partners embed on their sites, the payments and subscriptions API, the online scheduling portal and the issuance functions. The split was made to keep maintenance manageable: the widget or payments can evolve without touching the core, and one piece can be replaced at a time without stopping the others.',
        },
      },
      {
        title: { pt: 'Pagamento, assinatura e a rede de parceiros', en: 'Payments, subscriptions and the partner network' },
        body: {
          pt: 'A cobrança do certificado passa por uma camada que abstrai o gateway, porque cada autoridade de registro chega com o seu: Iugu, iPag, Granito, Safe2Pay. A empresa escolhe, e o roteamento é dela. Depois veio a cobrança do próprio SaaS: assinatura recorrente por cartão e boleto, com webhooks de cobrança e de pró-rata, carência para boleto não pago e uma verificação de assinatura em cada requisição, com cache curto para não pesar. O comissionamento do parceiro é calculado a partir da venda, sem planilha no meio.',
          en: 'Certificate billing goes through a layer that abstracts the gateway, because every registration authority arrives with a different one: Iugu, iPag, Granito, Safe2Pay. The company picks, and routing is theirs. Then came billing for the SaaS itself: recurring subscriptions by card and bank slip, with charge and pro-rata webhooks, a grace period for unpaid slips and a subscription check on every request, cached briefly so it stays cheap. Partner commission is computed from the sale, with no spreadsheet in between.',
        },
      },
      {
        title: { pt: 'De uma máquina com contêineres ao ECS com escala automática', en: 'From one container host to ECS with autoscaling' },
        body: {
          pt: 'Para validar o produto sem gastar com plataforma, tudo rodou primeiro em uma única máquina EC2 com um contêiner Docker por serviço. Isso segurou a operação enquanto o negócio se provava. Com a tração, a infraestrutura foi descrita em Terraform e migrada para ECS com escala automática: VPC com sub-redes públicas e privadas em duas zonas, saída por uma instância NAT pequena com IP fixo, balanceador interno único com um alvo por serviço, API Gateway por serviço com domínio próprio e parâmetros no SSM. Os front-ends foram para S3 servido por CloudFront. A estratégia de publicação foi escolhida para o menor tempo de indisponibilidade possível: a nova versão sobe e passa no teste de saúde antes de a antiga sair, e a troca de DNS do servidor antigo para o CDN custou poucos segundos.',
          en: 'To validate the product without paying for a platform, everything first ran on a single EC2 machine with one Docker container per service. That carried the operation while the business proved itself. Once there was traction, the infrastructure was described in Terraform and moved to ECS with autoscaling: a VPC with public and private subnets across two zones, egress through a small NAT instance with a fixed IP, a single internal load balancer with one target per service, an API Gateway per service with its own domain, and parameters in SSM. Front-ends moved to S3 served by CloudFront. The rollout strategy was chosen for the smallest possible downtime: the new version comes up and passes its health check before the old one goes away, and switching DNS from the old server to the CDN cost a couple of seconds.',
        },
      },
      {
        title: { pt: 'Um painel que não custa ingestão', en: 'A dashboard with no ingestion cost' },
        body: {
          pt: 'A observabilidade foi montada sem pipeline de dados e sem pagar por ingestão: o painel consulta as fontes na hora de abrir. As métricas de negócio vêm de endpoints da própria API, protegidos por um token de serviço, que calculam sobre as coleções existentes. As métricas de sistema vêm direto do CloudWatch, com requisições por segundo, erros e latência por serviço. Os logs são uma linha estruturada por requisição, consultadas no próprio CloudWatch. O custo da nuvem entra no mesmo painel, lido do Cost Explorer com cache de doze horas.',
          en: 'Observability was built with no data pipeline and no ingestion bill: the dashboard queries the sources when it is opened. Business metrics come from the API’s own endpoints, protected by a service token, computing over the existing collections. System metrics come straight from CloudWatch, with requests per second, errors and latency per service. Logs are one structured line per request, queried in CloudWatch itself. Cloud cost lands on the same dashboard, read from Cost Explorer with a twelve-hour cache.',
        },
      },
      {
        title: { pt: 'Métricas de negócio, não só de servidor', en: 'Business metrics, not just server metrics' },
        body: {
          pt: 'Além de saúde de aplicação, o painel calcula os indicadores que dizem se o SaaS está de pé: receita recorrente mensal e anual, receita nova líquida, ticket médio por conta, clientes ativos e novos, evasão de clientes e de receita, retenção líquida, custo de aquisição, valor do cliente ao longo do tempo e queima de caixa. Tudo derivado das coleções de usuários, acessos, certificados, faturas e assinaturas, sem tabela paralela. É esse painel que orienta a decisão do que construir em seguida.',
          en: 'Beyond application health, the dashboard computes the indicators that tell whether the SaaS is standing: monthly and annual recurring revenue, net new revenue, average revenue per account, active and new customers, customer and revenue churn, net retention, acquisition cost, lifetime value and burn rate. All derived from the existing users, access-log, certificates, invoices and subscriptions collections, with no parallel table. That dashboard is what guides the decision of what to build next.',
        },
      },
      {
        title: { pt: 'Rastrear a venda até a origem', en: 'Tracing a sale back to its origin' },
        body: {
          pt: 'O widget que os parceiros embarcam captura o identificador de campanha da URL, guarda por noventa dias no navegador e o propaga até o certificado emitido. A partir daí, três eventos de funil são reportados à plataforma de anúncios: lead registrado, pedido criado e pagamento aprovado, com configuração por ponto de atendimento e proteção contra duplicidade. O reporte é assíncrono, então não entra no caminho crítico da venda e não atrasa o atendimento.',
          en: 'The widget partners embed captures the campaign identifier from the URL, keeps it in the browser for ninety days and carries it through to the issued certificate. From there, three funnel events are reported to the ad platform: lead registered, order created and payment approved, configured per service point and protected against duplicates. Reporting is asynchronous, so it stays off the critical path of the sale and never slows the interaction.',
        },
      },
      {
        title: { pt: 'Entrega com teste como pré-requisito', en: 'Delivery with tests as a prerequisite' },
        body: {
          pt: 'Cada serviço tem seu próprio pipeline, e o que muda define o que roda: mudou infraestrutura, aplica Terraform; mudou aplicação, constrói a imagem e atualiza o serviço; mudou front-end, sincroniza com o bucket e invalida o CDN. A branch de desenvolvimento publica em desenvolvimento, a principal publica em produção. As APIs têm testes de integração contra banco real, com e-mail, gateways e emissão isolados, e o trabalho de teste é pré-requisito tanto para abrir o pedido de merge quanto para publicar. Um hook de git bloqueia envio direto para as branches protegidas.',
          en: 'Each service has its own pipeline, and what changed decides what runs: infrastructure changed, apply Terraform; application changed, build the image and update the service; front-end changed, sync the bucket and invalidate the CDN. The development branch publishes to development, the main branch to production. The APIs have integration tests against a real database, with e-mail, gateways and issuance stubbed, and the test job is a prerequisite both for opening the merge request and for publishing. A git hook blocks direct pushes to protected branches.',
        },
      },
      {
        title: { pt: 'Especificação como contrato de trabalho', en: 'The spec as the working contract' },
        body: {
          pt: 'A partir de 2026 o projeto passou a ser conduzido por Spec-Driven Development com o Claude Code. Cada demanda vira uma especificação numerada com histórias priorizadas, cenários de aceite, requisitos funcionais, critérios de sucesso mensuráveis e uma seção de dúvidas resolvidas com data. Dela saem o plano técnico, a pesquisa, o modelo de dados e a lista de tarefas. O que guia tudo é uma constituição do projeto, versionada e emendada, com cinco princípios: isolamento entre serviços, stack fixa, infraestrutura só como código, ambiente local em contêiner e regras de credencial. Antes de implementar, o plano é conferido item a item contra essa constituição.',
          en: 'From 2026 on, the project has been run with Spec-Driven Development using Claude Code. Every demand becomes a numbered specification with prioritized stories, acceptance scenarios, functional requirements, measurable success criteria and a dated section of resolved questions. From it come the technical plan, the research, the data model and the task list. Everything is guided by a project constitution, versioned and amended, with five principles: service isolation, a fixed stack, infrastructure only as code, containerized local development and credential rules. Before implementation, the plan is checked item by item against that constitution.',
        },
      },
      {
        title: { pt: 'Agentes com especialidade e memória', en: 'Agents with a specialty and a memory' },
        body: {
          pt: 'O trabalho é distribuído entre subagentes especializados. Um analista de produto recebe a demanda vaga, faz poucas perguntas, escreve a especificação e decompõe em tarefas independentes. A partir dele entram o agente de back-end em Node.js, o de front-end em AngularJS, o de DevOps, o de qualidade, o de mobile e o de páginas de captação. Cada um carrega as convenções da sua área e um arquivo de contexto do serviço em que vai mexer, além de uma seção com a realidade do Gerencert que sobrepõe o guia genérico. Alguns mantêm memória entre sessões, então uma decisão de infraestrutura tomada em julho continua valendo em setembro sem que eu precise repetir.',
          en: 'The work is distributed across specialized subagents. A product analyst takes the vague request, asks few questions, writes the specification and breaks it into independent tasks. From there come the Node.js back-end agent, the AngularJS front-end agent, the DevOps agent, the quality agent, the mobile agent and the landing-page agent. Each carries the conventions of its area and a context file for the service it will touch, plus a section with the reality of Gerencert that overrides the generic guide. Some keep memory across sessions, so an infrastructure decision made in July still holds in September without me repeating it.',
        },
      },
      {
        title: { pt: 'O que a IA não decide', en: 'What the AI does not decide' },
        body: {
          pt: 'O fluxo automatiza a rotina em volta do código: cria a branch da feature, comita entre as etapas, transforma tarefas em issues. O que ficou explicitamente fora foi o merge. Uma emenda da constituição proibiu merge automatizado, e as regras de permissão do próprio agente negam os comandos que enviam ou integram código. A decisão de subir para produção continua sendo humana, e essa fronteira é o que torna o resto confortável de automatizar.',
          en: 'The flow automates the routine around the code: it creates the feature branch, commits between steps, turns tasks into issues. What was explicitly left out is the merge. A constitution amendment banned automated merges, and the agent’s own permission rules deny the commands that push or integrate code. The decision to ship to production stays human, and that boundary is what makes the rest comfortable to automate.',
        },
      },
    ],
    architecture: [
      { layer: { pt: 'Aplicação web', en: 'Web application' }, detail: { pt: 'Front-end em AngularJS empacotado com Webpack, hospedado em S3 e servido por CloudFront. Perfis de acesso por empresa e ponto de atendimento.', en: 'AngularJS front-end bundled with Webpack, hosted on S3 and served by CloudFront. Access profiles per company and service point.' } },
      { layer: { pt: 'API principal', en: 'Main API' }, detail: { pt: 'Koa.js com Mongoose e autenticação por token. Certificados, clientes, agenda, financeiro, comissões, vencimentos e os endpoints de métricas.', en: 'Koa.js with Mongoose and token authentication. Certificates, customers, scheduling, finance, commissions, expiry control and the metrics endpoints.' } },
      { layer: { pt: 'Widget de venda', en: 'Sales widget' }, detail: { pt: 'Script embarcado no site do parceiro, iframe de atendimento e API própria com cache em Redis. Captura e propaga a origem da campanha.', en: 'Script embedded on the partner’s site, an iframe for the interaction and its own API with a Redis cache. Captures and carries the campaign origin.' } },
      { layer: { pt: 'Pagamentos e assinaturas', en: 'Payments and subscriptions' }, detail: { pt: 'Serviço em Hapi.js com validação de esquema. Roteia por gateway escolhido pela empresa e trata os webhooks de cobrança recorrente e pró-rata.', en: 'Hapi.js service with schema validation. Routes by the gateway the company picked and handles recurring-charge and pro-rata webhooks.' } },
      { layer: { pt: 'Emissão e agenda', en: 'Issuance and scheduling' }, detail: { pt: 'Funções serverless para a emissão junto à certificadora e ao birô de crédito. Portal de agenda online com integração ao Google Calendar por ponto de atendimento.', en: 'Serverless functions for issuance with the certificate authority and the credit bureau. An online scheduling portal integrated with Google Calendar per service point.' } },
      { layer: { pt: 'Dados', en: 'Data' }, detail: { pt: 'MongoDB gerenciado, com índices desenhados para os relatórios pesados e compressão na conexão. Redis para o cache do widget.', en: 'Managed MongoDB, with indexes designed for the heavy reports and connection compression. Redis for the widget cache.' } },
      { layer: { pt: 'Fundação de infraestrutura', en: 'Infrastructure foundation' }, detail: { pt: 'Terraform: VPC em duas zonas, instância NAT, cluster ECS, balanceador interno, API Gateway por serviço, parâmetros no SSM e certificado curinga.', en: 'Terraform: VPC across two zones, NAT instance, ECS cluster, internal load balancer, API Gateway per service, SSM parameters and a wildcard certificate.' } },
      { layer: { pt: 'Entrega e operação', en: 'Delivery and operations' }, detail: { pt: 'Pipeline por serviço com testes de integração obrigatórios. Painel único no Grafana com métricas de negócio, sistema, custo e logs, tudo consultado na hora.', en: 'One pipeline per service with mandatory integration tests. A single Grafana dashboard with business, system, cost and log data, all queried on read.' } },
    ],
    stack: [
      { group: { pt: 'Front-end', en: 'Front-end' }, items: ['AngularJS', 'Webpack', 'JavaScript', 'HTML/CSS'] },
      { group: { pt: 'Back-end', en: 'Back-end' }, items: ['Node.js', 'Koa.js', 'Hapi.js', 'MongoDB', 'Redis', 'AWS Lambda'] },
      { group: { pt: 'Infra', en: 'Infra' }, items: ['AWS', 'Terraform', 'ECS Fargate', 'API Gateway', 'S3', 'CloudFront', 'Cloudflare'] },
      { group: { pt: 'Operação', en: 'Operations' }, items: ['Grafana', 'CloudWatch', 'Cost Explorer', 'GitHub Actions', 'Jest'] },
      { group: { pt: 'Integrações', en: 'Integrations' }, items: ['Gateways de pagamento', 'Google Calendar', 'Google Ads', 'SendGrid'] },
      { group: { pt: 'Método', en: 'Method' }, items: ['Spec-Driven Development', 'Claude Code', 'Subagentes especializados'] },
    ],
    results: [
      { value: '40s', label: { pt: 'de atendimento de venda, contra 8 minutos antes', en: 'per sales interaction, down from 8 minutes' } },
      { value: '~92%', label: { pt: 'de ganho de eficiência na operação de vendas', en: 'efficiency gain in the sales operation' } },
      { value: '7', label: { pt: 'serviços em produção sobre uma fundação em Terraform', en: 'services in production on a Terraform foundation' } },
    ],
    learnings: {
      pt: [
        'Ganho de eficiência quase nunca está no código. O nosso veio de tirar etapas do processo, não de otimizar o que já existia.',
        'Validar em uma máquina só, com um contêiner por serviço, foi o que permitiu separar responsabilidades desde cedo sem pagar por plataforma antes de haver receita.',
        'Integração de pagamento precisa de abstração desde o primeiro gateway, porque o segundo sempre chega, e sempre chega com pressa.',
        'Painel que calcula na hora de abrir resolveu observabilidade sem pipeline de dados nem conta de ingestão. Para um SaaS pequeno, é a escolha que cabe.',
        'Especificar antes de implementar foi o que tornou os agentes de IA úteis em um sistema com sete anos de história. Sem spec, o agente acerta o arquivo e erra a regra.',
        'Automatizar tudo em volta do código e deixar o merge com uma pessoa foi o limite que me deixou confortável para acelerar o resto.',
      ],
      en: [
        'Efficiency gains are almost never in the code. Ours came from removing process steps, not from optimizing what was already there.',
        'Validating on a single machine, with one container per service, is what allowed responsibilities to be split early without paying for a platform before there was revenue.',
        'Payment integration needs an abstraction from the very first gateway, because the second one always arrives, and it always arrives in a hurry.',
        'A dashboard that computes on read solved observability with no data pipeline and no ingestion bill. For a small SaaS, that is the choice that fits.',
        'Specifying before implementing is what made AI agents useful in a system with seven years of history. Without a spec, the agent gets the file right and the rule wrong.',
        'Automating everything around the code and leaving the merge to a person was the boundary that made me comfortable accelerating the rest.',
      ],
    },
  },

  /* ═══════════════════════════════ YellowJobs ═══════════════════════════════
   * Product facts from yellowjobs.com.br (read on 2026-09-02). Engineering
   * narrative provided by Robson.
   * ═════════════════════════════════════════════════════════════════════════ */
  {
    slug: 'yellowjobs',
    name: 'YellowJobs',
    year: '2024 →',
    status: { pt: 'Em produção', en: 'In production' },
    url: 'https://yellowjobs.com.br',
    tagline: {
      pt: 'O agente que busca vagas de tecnologia em várias fontes e se candidata por você, com regras que são suas.',
      en: 'The agent that finds tech jobs across sources and applies on your behalf, following rules you wrote.',
    },
    summary: {
      pt: 'Procurar vaga de tecnologia é repetir o mesmo formulário dezenas de vezes por semana. O YellowJobs reúne vagas de diversas fontes em um só painel e envia a candidatura por você, a partir da sua própria conta e da sua própria sessão. Você escreve a regra do que vale a pena; o agente executa. Ele não inventa um dado seu e não se candidata duas vezes à mesma vaga. O acesso é por convite, e o primeiro lote de até 50 candidaturas é gratuito.',
      en: 'Looking for a tech job means filling in the same form dozens of times a week. YellowJobs gathers jobs from several sources into one board and submits the application for you, from your own account and your own session. You write the rule for what is worth applying to; the agent follows it. It never makes up a fact about you and never applies twice to the same job. Access is by invitation, and the first batch of up to 50 applications is free.',
    },
    role: {
      pt: 'Produto, arquitetura, back-end, front-end, extensão e infraestrutura',
      en: 'Product, architecture, back-end, front-end, extension and infrastructure',
    },
    tags: ['Node.js', 'TypeScript', 'React', 'Extensão Chrome', 'AWS', 'Terraform'],
    theme: { from: 'from-amber-400/20', to: 'to-yellow-500/5', ring: 'ring-amber-400/30' },
    screenshots: [
      { src: '/projects/yellowjobs/landing.webp', alt: { pt: 'Landing page do YellowJobs, com o título "O agente que busca vagas e se candidata por você"', en: 'YellowJobs landing page with the headline "The agent that finds jobs and applies for you"' } },
      { src: '/projects/yellowjobs/kanban.webp', cover: true, alt: { pt: 'Painel de candidaturas em kanban: Pendentes, Executando, Falhas e Aplicadas', en: 'Applications kanban board: Pending, Running, Failed and Applied' } },
      { src: '/projects/yellowjobs/overlay.webp', alt: { pt: 'Extensão do Chrome preenchendo um formulário de vaga, com o painel sobreposto mostrando o campo atual', en: 'Chrome extension filling in a job form, with the overlay panel showing the current field' } },
      { src: '/projects/yellowjobs/profile.webp', alt: { pt: 'Tela de perfil do candidato com as respostas salvas para reuso', en: 'Candidate profile screen with saved answers for reuse' } },
    ],
    context: {
      pt: 'Quem procura vaga de tecnologia no Brasil, ou remoto no exterior, passa pelo mesmo ciclo: achar a vaga em um portal, abrir o site da empresa, criar conta, preencher um formulário longo, repetir no dia seguinte. As ferramentas de automação que existem fazem isso do lado do servidor, pedindo a senha do candidato e enviando candidaturas que ele nunca viu. O YellowJobs parte de outra premissa. O agente busca e organiza as vagas, mas o preenchimento acontece na máquina do candidato, na sessão que já é dele, e a decisão do que enviar segue a regra que ele mesmo escreveu. O recrutador recebe uma candidatura do candidato, porque é isso que ela é.',
      en: 'Anyone looking for a tech job in Brazil, or remotely abroad, goes through the same loop: find the job on a portal, open the company site, create an account, fill in a long form, repeat the next day. Existing automation tools do this server-side, asking for the candidate’s password and sending applications they never saw. YellowJobs starts from a different premise. The agent finds and organizes the jobs, but the form is filled in on the candidate’s machine, in a session that is already theirs, and the decision of what to send follows a rule they wrote. The recruiter receives an application from the candidate, because that is what it is.',
    },
    challenges: {
      pt: [
        'Preencher formulários de sites que não controlamos, cada um com sua estrutura, sem quebrar quando o site muda.',
        'Garantir que nenhuma senha de portal de vagas passe pelo nosso servidor, mantendo a candidatura na conta do próprio usuário.',
        'Fazer o agente parar e perguntar quando não sabe uma resposta, em vez de estimar, e reaproveitar a resposta em qualquer site que fizer a mesma pergunta.',
        'Detectar candidatura duplicada antes do envio, já que repetir uma candidatura pode custar a vaga.',
        'Abrir o acesso devagar: cada site novo precisa ser medido antes de virar promessa, e o produto só promete o que já mediu.',
        'Construir front-end, back-end, extensão, landing page, infraestrutura e identidade visual com uma pessoa, apoiada por agentes de IA.',
      ],
      en: [
        'Filling in forms on sites we do not control, each with its own structure, without breaking when the site changes.',
        'Making sure no job-portal password ever reaches our server, keeping the application inside the user’s own account.',
        'Getting the agent to stop and ask when it does not know an answer, instead of guessing, and reusing the answer on any site that asks the same question.',
        'Detecting a duplicate application before sending, since applying twice can cost the job.',
        'Opening access slowly: every new site has to be measured before it becomes a promise, and the product only promises what it has measured.',
        'Building front-end, back-end, extension, landing page, infrastructure and visual identity with one person, supported by AI agents.',
      ],
    },
    approach: [
      {
        title: { pt: 'Especificar antes de programar', en: 'Specify before coding' },
        body: {
          pt: 'O projeto foi conduzido em Spec-Driven Development. Cada funcionalidade nasce como uma especificação: o que o usuário vê, o que o sistema garante, o que fica fora. A spec é o contrato entre os agentes de IA que implementam cada parte e a referência para os testes. Quando algo sai diferente do combinado, a discussão volta para a spec, não para o código.',
          en: 'The project followed Spec-Driven Development. Every feature starts as a specification: what the user sees, what the system guarantees, what is out of scope. The spec is the contract between the AI agents that implement each part and the reference for the tests. When something comes out different from what was agreed, the discussion goes back to the spec, not to the code.',
        },
      },
      {
        title: { pt: 'Um time de agentes com especialidades', en: 'A team of agents with specialties' },
        body: {
          pt: 'Em vez de um único assistente genérico, o trabalho foi dividido entre agentes especializados: um de produto e especificação, um de back-end, um de front-end, um de infraestrutura, um de qualidade e um de escrita para a copy das páginas. Cada agente conhece as convenções da sua área e recebe a spec como entrada. Eu fico com a arquitetura, a revisão e as decisões que não cabem em uma spec.',
          en: 'Instead of a single generic assistant, the work was split among specialized agents: one for product and specification, one for back-end, one for front-end, one for infrastructure, one for quality and one for writing the page copy. Each agent knows the conventions of its area and takes the spec as input. I keep architecture, review and the decisions that do not fit in a spec.',
        },
      },
      {
        title: { pt: 'O preenchimento acontece na máquina do usuário', en: 'Forms are filled on the user’s machine' },
        body: {
          pt: 'Uma extensão do Chrome abre a vaga, lê o formulário e preenche campo a campo, usando a sessão que o usuário já tem no site. Um painel sobreposto mostra o que está sendo feito e o botão "Prefiro preencher" deixa o usuário assumir no meio, sem perder o que já foi preenchido. O servidor nunca recebe senha de site de vagas, porque não precisa dela para nada. A extensão ainda é distribuída fora da Chrome Web Store, em modo desenvolvedor, para quem entra no lote.',
          en: 'A Chrome extension opens the job, reads the form and fills it in field by field, using the session the user already has on that site. An overlay panel shows what is happening and an "I’d rather fill this in" button lets the user take over midway without losing what was already filled. The server never receives a job-site password, because it does not need one. The extension is still distributed outside the Chrome Web Store, in developer mode, to those who join a batch.',
        },
      },
      {
        title: { pt: 'Um agente que não inventa dado', en: 'An agent that does not make things up' },
        body: {
          pt: 'O agente responde só o que é fato no perfil do candidato. Uma pergunta que ele não sabe responder não vira estimativa: vira uma pergunta para o usuário, e a candidatura espera. A resposta fica salva e é reusada em toda vaga que fizer a mesma pergunta, escrita do jeito que a pessoa escreveria. Antes de enviar, o agente confere se aquela vaga já recebeu candidatura e para se for o caso.',
          en: 'The agent answers only what is a fact in the candidate’s profile. A question it cannot answer does not become an estimate: it becomes a question for the user, and the application waits. The answer is saved and reused on every job that asks the same thing, written the way the person would write it. Before sending, the agent checks whether that job already received an application and stops if so.',
        },
      },
      {
        title: { pt: 'Front-end, back-end e um painel para acompanhar', en: 'Front-end, back-end and a board to follow along' },
        body: {
          pt: 'O back-end em Node.js e TypeScript coleta vagas de várias fontes, calcula a aderência ao perfil e coordena a fila de candidaturas. O front-end em React apresenta tudo em um kanban com quatro colunas: Pendentes, Executando, Falhas e Aplicadas. Cada card mostra a vaga, a empresa, a aderência em porcentagem e o estado atual, do "aguardando sua aprovação" ao "enviada, comprovante salvo". No modo em lote, a coluna de pendentes anda sozinha, dentro das regras do usuário.',
          en: 'The Node.js and TypeScript back-end collects jobs from several sources, scores fit against the profile and coordinates the application queue. The React front-end shows everything on a kanban with four columns: Pending, Running, Failed and Applied. Each card shows the job, the company, the fit percentage and the current state, from "waiting for your approval" to "sent, receipt saved". In batch mode the pending column moves on its own, within the user’s rules.',
        },
      },
      {
        title: { pt: 'Infraestrutura compartilhada, como código', en: 'Shared infrastructure, as code' },
        body: {
          pt: 'YellowJobs e Moosy são produtos diferentes, mas precisam das mesmas coisas de base: rede, cluster, banco, certificados, DNS, segredos. Essa camada comum foi provisionada uma vez com Terraform e é reaproveitada pelos dois. Cada produto tem seus módulos por cima, também em Terraform, e nada é criado à mão no console. Os front-ends e a landing page são estáticos, hospedados em S3 e servidos pelo CloudFront, o que mantém o custo baixo e a entrega rápida em qualquer região.',
          en: 'YellowJobs and Moosy are different products, but they need the same foundations: network, cluster, database, certificates, DNS, secrets. That common layer was provisioned once with Terraform and is shared by both. Each product has its own modules on top, also in Terraform, and nothing is created by hand in the console. Front-ends and the landing page are static, hosted on S3 and served through CloudFront, which keeps cost low and delivery fast in any region.',
        },
      },
      {
        title: { pt: 'Pipeline, testes e observabilidade', en: 'Pipeline, tests and observability' },
        body: {
          pt: 'Todo commit passa por um pipeline de CI/CD que roda testes automatizados, faz o build e publica. O que chega em produção é o que passou pelos testes, sem passo manual. Do lado da operação, logs, métricas e alertas cobrem a saúde do sistema, e um conjunto de métricas de produto acompanha o que importa para o negócio: quantas vagas foram coletadas, quantas candidaturas foram aprovadas, quantas falharam e em que campo. Foi esse painel que permitiu abrir o acesso site por site, medindo antes de prometer.',
          en: 'Every commit goes through a CI/CD pipeline that runs automated tests, builds and publishes. What reaches production is what passed the tests, with no manual step. On the operations side, logs, metrics and alerts cover system health, and a set of product metrics tracks what matters to the business: how many jobs were collected, how many applications were approved, how many failed and on which field. That dashboard is what made it possible to open access site by site, measuring before promising.',
        },
      },
      {
        title: { pt: 'Identidade, landing page e divulgação', en: 'Identity, landing page and launch' },
        body: {
          pt: 'A marca foi criada do zero: tema escuro, amarelo como cor principal e um "Y" cujo braço longo é um visto, para lembrar quem decide onde ele cai. A landing page é bilíngue, organizada em quatro artigos que explicam o produto sem exagero, com atenção a performance, metadados, Open Graph e URLs canônicas por idioma. Para a divulgação, montei um plano de publicações no Instagram, com sequência de posts que apresenta o produto e o que ele não faz, no mesmo tom da página.',
          en: 'The brand was built from scratch: dark theme, yellow as the main color and a "Y" whose long arm is a checkmark, a reminder of who decides where it lands. The landing page is bilingual, organized into four articles that explain the product without overstatement, with care for performance, metadata, Open Graph and per-language canonical URLs. For the launch I put together an Instagram publishing plan, a sequence of posts that presents the product and what it does not do, in the same tone as the page.',
        },
      },
    ],
    architecture: [
      { layer: { pt: 'Extensão do Chrome', en: 'Chrome extension' }, detail: { pt: 'Lê e preenche formulários na sessão do usuário, exibe o painel sobreposto e permite assumir o preenchimento a qualquer momento.', en: 'Reads and fills forms in the user’s session, shows the overlay panel and lets the user take over at any time.' } },
      { layer: { pt: 'Front-end web', en: 'Web front-end' }, detail: { pt: 'React e TypeScript. Kanban de candidaturas, perfil com respostas salvas e regras de aplicação. Estático em S3, servido pelo CloudFront.', en: 'React and TypeScript. Applications kanban, profile with saved answers and application rules. Static on S3, served through CloudFront.' } },
      { layer: { pt: 'API e agente', en: 'API and agent' }, detail: { pt: 'Node.js e TypeScript. Coleta de vagas em múltiplas fontes, cálculo de aderência, fila de candidaturas, detecção de duplicidade e perguntas pendentes ao usuário.', en: 'Node.js and TypeScript. Job collection from multiple sources, fit scoring, application queue, duplicate detection and pending questions to the user.' } },
      { layer: { pt: 'Dados', en: 'Data' }, detail: { pt: 'MongoDB para vagas, candidaturas, perfil e respostas reutilizáveis.', en: 'MongoDB for jobs, applications, profile and reusable answers.' } },
      { layer: { pt: 'Infraestrutura compartilhada', en: 'Shared infrastructure' }, detail: { pt: 'Rede, cluster, DNS, certificados e segredos provisionados com Terraform na AWS e compartilhados com o Moosy.', en: 'Network, cluster, DNS, certificates and secrets provisioned with Terraform on AWS and shared with Moosy.' } },
      { layer: { pt: 'Entrega e operação', en: 'Delivery and operations' }, detail: { pt: 'Pipeline de CI/CD com testes automatizados. Logs, métricas e alertas do sistema, mais métricas de produto por fonte e por site.', en: 'CI/CD pipeline with automated tests. System logs, metrics and alerts, plus product metrics per source and per site.' } },
    ],
    stack: [
      { group: { pt: 'Front-end e extensão', en: 'Front-end and extension' }, items: ['React', 'TypeScript', 'Extensão Chrome'] },
      { group: { pt: 'Back-end', en: 'Back-end' }, items: ['Node.js', 'TypeScript', 'MongoDB'] },
      { group: { pt: 'Infra', en: 'Infra' }, items: ['AWS', 'Terraform', 'S3', 'CloudFront', 'CI/CD'] },
      { group: { pt: 'Operação', en: 'Operations' }, items: ['Logs', 'Métricas', 'Alertas', 'Métricas de produto'] },
      { group: { pt: 'Método', en: 'Method' }, items: ['Spec-Driven Development', 'Multiagentes', 'Claude Code'] },
    ],
    results: [
      { value: '0', label: { pt: 'senhas de sites de vagas passando pelo servidor', en: 'job-site passwords passing through the server' } },
      { value: '50', label: { pt: 'candidaturas grátis no primeiro lote, sem cartão', en: 'free applications in the first batch, no card required' } },
      { value: 'S3 + CloudFront', label: { pt: 'hospedagem estática do front-end e da landing page', en: 'static hosting for the front-end and landing page' } },
    ],
    learnings: {
      pt: [
        'Rodar o preenchimento na máquina do usuário foi a decisão mais importante do produto. Custou mais engenharia do que fazer no servidor, mas resolveu privacidade, sessão e confiança de uma vez.',
        'Um agente que sabe dizer "não sei" é mais útil do que um que sempre responde. A pergunta pendente virou parte do fluxo, não um erro.',
        'Especificar antes de implementar deu velocidade com agentes de IA, não o contrário. A spec evita o retrabalho de descobrir o combinado no meio do código.',
        'Abrir o acesso por lotes pequenos e medir cada site antes de prometer deixou o produto honesto com quem usa e com quem constrói.',
      ],
      en: [
        'Running the form filling on the user’s machine was the most important product decision. It cost more engineering than doing it server-side, but it solved privacy, session and trust at once.',
        'An agent that knows how to say "I don’t know" is more useful than one that always answers. The pending question became part of the flow, not an error.',
        'Specifying before implementing made AI agents faster, not slower. The spec avoids the rework of discovering the agreement halfway through the code.',
        'Opening access in small batches and measuring each site before promising kept the product honest with users and with the people building it.',
      ],
    },
  },

  /* ═════════════════════════════════ Moosy ═════════════════════════════════
   * Product facts from moosy.app (read on 2026-09-02). Engineering narrative
   * provided by Robson.
   * ═════════════════════════════════════════════════════════════════════════ */
  {
    slug: 'moosy',
    name: 'Moosy',
    year: '2024 →',
    status: { pt: 'Em produção', en: 'In production' },
    url: 'https://moosy.app',
    tagline: {
      pt: 'App de finanças pessoais que reúne o controle do mês, os investimentos e as metas, com contas compartilhadas.',
      en: 'A personal finance app that brings the monthly budget, investments and goals together, with shared accounts.',
    },
    summary: {
      pt: 'Moosy nasceu de uma frase: não tenha só sonhos, tenha planos para eles. O app junta em um só lugar o balanço do mês, os investimentos importados direto da B3 e as metas ligadas a ativos reais, com progresso em tempo real. Tudo pode ser compartilhado com quem cuida das contas junto, organizado por conta: Pessoal, Casa, o que precisar. Está em beta por convite, com 30 dias grátis e depois R$ 6,99 por mês.',
      en: 'Moosy started from one sentence: don’t just have dreams, have plans for them. The app brings together the monthly balance, investments imported straight from B3 (the Brazilian stock exchange) and goals tied to real assets, with progress in real time. Everything can be shared with whoever manages the money with you, organized by account: Personal, Home, whatever you need. It is in invite-only beta, free for 30 days and then R$ 6.99 a month.',
    },
    role: {
      pt: 'Produto, arquitetura, back-end, app mobile e infraestrutura',
      en: 'Product, architecture, back-end, mobile app and infrastructure',
    },
    tags: ['React Native', 'TypeScript', 'Node.js', 'B3', 'AWS', 'Terraform'],
    theme: { from: 'from-violet-400/20', to: 'to-fuchsia-500/5', ring: 'ring-violet-400/30' },
    screenshots: [
      { src: '/projects/moosy/landing.webp', alt: { pt: 'Imagem de apresentação do Moosy com a frase "Não tenha só sonhos, tenha planos para eles"', en: 'Moosy presentation image with the line "Don’t just have dreams, have plans for them"' } },
      { src: '/projects/moosy/home.webp', kind: 'phone', alt: { pt: 'Tela inicial do app Moosy', en: 'Moosy app home screen' } },
      { src: '/projects/moosy/goals.webp', kind: 'phone', alt: { pt: 'Tela de metas com progresso em tempo real', en: 'Goals screen with real-time progress' } },
      { src: '/projects/moosy/balance.webp', kind: 'phone', alt: { pt: 'Tela de balanço mensal com receitas, despesas e recorrências', en: 'Monthly balance screen with income, expenses and recurring items' } },
      { src: '/projects/moosy/investments.webp', kind: 'phone', alt: { pt: 'Tela de investimentos com ativos importados da B3', en: 'Investments screen with assets imported from B3' } },
    ],
    context: {
      pt: 'A maioria dos apps de finanças resolve uma parte do problema: um controla gastos, outro acompanha a carteira, e a meta fica em uma planilha. Quem divide as contas com alguém ainda precisa juntar tudo isso em conversa. O Moosy foi desenhado para uma pessoa, ou um casal, ver em uma tela quanto entrou, quanto saiu, quanto está investido e quanto falta para cada objetivo. Os investimentos vêm da B3, com cotação em tempo real, preço médio e dividendos por data-com. As metas apontam para ativos de verdade, então o progresso não depende de alguém atualizar um número à mão.',
      en: 'Most finance apps solve one part of the problem: one tracks spending, another follows the portfolio, and the goal lives in a spreadsheet. Anyone who shares expenses with someone still has to stitch all of that together in conversation. Moosy was designed so a person, or a couple, can see on one screen what came in, what went out, what is invested and how much is left for each goal. Investments come from B3 with real-time quotes, average price and dividends by ex-date. Goals point to real assets, so progress does not depend on someone updating a number by hand.',
    },
    challenges: {
      pt: [
        'Importar ativos da B3 e manter cotação, preço médio e dividendos corretos para ações, FIIs, renda fixa e cripto.',
        'Ligar metas a ativos reais e recalcular o progresso sempre que a carteira ou o saldo muda.',
        'Modelar contas compartilhadas com permissões por participante, sem misturar o que é pessoal com o que é da casa.',
        'Tratar dado financeiro com privacidade como regra: nada vendido, nada exposto, termos e política publicados desde o beta.',
        'Entregar um app mobile, uma API, uma landing page e a infraestrutura com uma pessoa, reaproveitando a base construída para o YellowJobs.',
      ],
      en: [
        'Importing assets from B3 and keeping quotes, average price and dividends correct for stocks, REITs, fixed income and crypto.',
        'Tying goals to real assets and recomputing progress whenever the portfolio or the balance changes.',
        'Modeling shared accounts with per-participant permissions, without mixing what is personal with what belongs to the household.',
        'Treating financial data with privacy as the rule: nothing sold, nothing exposed, terms and policy published from the beta on.',
        'Shipping a mobile app, an API, a landing page and the infrastructure with one person, reusing the foundation built for YellowJobs.',
      ],
    },
    approach: [
      {
        title: { pt: 'Quatro módulos, uma tela por dia', en: 'Four modules, one screen a day' },
        body: {
          pt: 'O produto foi organizado em quatro módulos que aparecem na ordem em que a pessoa pensa no dinheiro. Metas: cada objetivo vinculado a ativos, com progresso em tempo real. Balanço mensal: receitas, despesas e recorrências, com o gráfico da evolução do saldo. Investimentos: ativos importados da B3, cotação ao vivo, preço médio e dividendos por data-com. Contas compartilhadas: participantes convidados por e-mail, organizados por conta. A interface foi desenhada para ser aberta todo dia, então é limpa e objetiva por decisão, não por falta de tempo.',
          en: 'The product is organized into four modules in the order people think about money. Goals: each objective tied to assets, with real-time progress. Monthly balance: income, expenses and recurring items, with a chart of how the balance evolves. Investments: assets imported from B3, live quotes, average price and dividends by ex-date. Shared accounts: participants invited by e-mail, organized by account. The interface was designed to be opened every day, so it is clean and direct by decision, not for lack of time.',
        },
      },
      {
        title: { pt: 'App mobile em React Native', en: 'Mobile app in React Native' },
        body: {
          pt: 'O app foi construído em React Native com TypeScript, com uma base de código para iOS e Android. A navegação segue os quatro módulos, e cada tela mostra o essencial primeiro: o número que importa, depois o detalhe. O back-end em Node.js e TypeScript expõe a API que o app consome, cuida da importação da B3, do cálculo de progresso das metas e das permissões das contas compartilhadas.',
          en: 'The app was built in React Native with TypeScript, from one codebase for iOS and Android. Navigation follows the four modules, and each screen shows the essential first: the number that matters, then the detail. The Node.js and TypeScript back-end exposes the API the app consumes and handles the B3 import, goal progress calculation and shared-account permissions.',
        },
      },
      {
        title: { pt: 'Spec primeiro, agentes depois', en: 'Spec first, agents second' },
        body: {
          pt: 'Assim como no YellowJobs, cada funcionalidade começou como especificação. Para um produto financeiro isso pesa mais: a regra de cálculo de preço médio, o tratamento de um dividendo ou o que acontece quando um participante sai de uma conta compartilhada precisam estar escritos antes de virar código. A spec serviu de contrato para os agentes de IA e de base para os testes que protegem essas regras.',
          en: 'As with YellowJobs, every feature started as a specification. For a financial product that matters more: the average-price rule, how a dividend is handled or what happens when a participant leaves a shared account have to be written down before they become code. The spec served as the contract for the AI agents and as the basis for the tests that protect those rules.',
        },
      },
      {
        title: { pt: 'Agentes especializados, revisão minha', en: 'Specialized agents, my review' },
        body: {
          pt: 'O fluxo multiagente aqui incluiu um agente mobile em React Native, além dos de produto, back-end, infraestrutura, qualidade e escrita. Cada um recebe a spec e trabalha dentro das convenções da sua área. A arquitetura, a revisão do que cada agente entrega e a decisão de quando algo está pronto para produção continuam comigo.',
          en: 'The multi-agent flow here included a React Native mobile agent alongside the product, back-end, infrastructure, quality and writing agents. Each one takes the spec and works within the conventions of its area. Architecture, reviewing what each agent delivers and deciding when something is ready for production stay with me.',
        },
      },
      {
        title: { pt: 'A mesma base de infraestrutura do YellowJobs', en: 'The same infrastructure foundation as YellowJobs' },
        body: {
          pt: 'O Moosy roda sobre a camada de infraestrutura compartilhada criada com Terraform: rede, cluster, DNS, certificados e segredos são os mesmos módulos, com o que é específico do produto por cima. Isso encurtou o tempo até o primeiro deploy e faz uma melhoria de base valer para os dois produtos. A landing page e os recursos estáticos ficam em S3 e são servidos pelo CloudFront.',
          en: 'Moosy runs on the shared infrastructure layer built with Terraform: network, cluster, DNS, certificates and secrets are the same modules, with what is product-specific on top. That shortened the time to first deploy and makes a foundation improvement count for both products. The landing page and static assets live on S3 and are served through CloudFront.',
        },
      },
      {
        title: { pt: 'Pipeline, testes e métricas de produto', en: 'Pipeline, tests and product metrics' },
        body: {
          pt: 'Cada mudança passa pelo pipeline de CI/CD, com testes automatizados nas regras financeiras antes de qualquer publicação. Em operação, logs, métricas e alertas acompanham a saúde da API e da importação da B3. As métricas de produto medem o que interessa para um app de uso diário: contas criadas, metas ativas, importações concluídas, participantes convidados. É o que orienta o que entra na próxima versão.',
          en: 'Every change goes through the CI/CD pipeline, with automated tests on the financial rules before anything is published. In operation, logs, metrics and alerts follow the health of the API and of the B3 import. Product metrics measure what matters for a daily-use app: accounts created, active goals, completed imports, invited participants. That is what guides what goes into the next version.',
        },
      },
      {
        title: { pt: 'Identidade e landing page', en: 'Identity and landing page' },
        body: {
          pt: 'A identidade visual do Moosy foi criada do zero, com tom mais leve do que o do YellowJobs, para um produto que a pessoa abre todo dia. A landing page é bilíngue, com foco em performance, metadados, Open Graph e URLs canônicas por idioma, e apresenta os quatro módulos com telas reais do app. Termos de serviço e política de privacidade estão publicados desde o beta, com a promessa clara de que os dados são do usuário e não são vendidos.',
          en: 'Moosy’s visual identity was created from scratch, lighter in tone than YellowJobs, for a product people open every day. The landing page is bilingual, with a focus on performance, metadata, Open Graph and per-language canonical URLs, and presents the four modules with real app screens. Terms of service and privacy policy have been published since the beta, with a clear promise that the data belongs to the user and is never sold.',
        },
      },
    ],
    architecture: [
      { layer: { pt: 'App mobile', en: 'Mobile app' }, detail: { pt: 'React Native e TypeScript, uma base para iOS e Android. Quatro módulos: metas, balanço, investimentos e contas compartilhadas.', en: 'React Native and TypeScript, one codebase for iOS and Android. Four modules: goals, balance, investments and shared accounts.' } },
      { layer: { pt: 'API', en: 'API' }, detail: { pt: 'Node.js e TypeScript. Importação da B3, cotações, preço médio, dividendos, progresso de metas e permissões por conta.', en: 'Node.js and TypeScript. B3 import, quotes, average price, dividends, goal progress and per-account permissions.' } },
      { layer: { pt: 'Integração B3', en: 'B3 integration' }, detail: { pt: 'Importação dos ativos do investidor e atualização de cotação em tempo real para ações, FIIs, renda fixa e cripto.', en: 'Import of the investor’s assets and real-time quote updates for stocks, REITs, fixed income and crypto.' } },
      { layer: { pt: 'Landing page', en: 'Landing page' }, detail: { pt: 'Estática, bilíngue, hospedada em S3 e servida pelo CloudFront, com metadados e Open Graph por idioma.', en: 'Static, bilingual, hosted on S3 and served through CloudFront, with per-language metadata and Open Graph.' } },
      { layer: { pt: 'Infraestrutura compartilhada', en: 'Shared infrastructure' }, detail: { pt: 'Módulos Terraform de rede, cluster, DNS, certificados e segredos, compartilhados com o YellowJobs.', en: 'Terraform modules for network, cluster, DNS, certificates and secrets, shared with YellowJobs.' } },
      { layer: { pt: 'Entrega e operação', en: 'Delivery and operations' }, detail: { pt: 'Pipeline de CI/CD com testes das regras financeiras. Logs, métricas, alertas e métricas de produto.', en: 'CI/CD pipeline with tests on the financial rules. Logs, metrics, alerts and product metrics.' } },
    ],
    stack: [
      { group: { pt: 'Mobile', en: 'Mobile' }, items: ['React Native', 'TypeScript'] },
      { group: { pt: 'Back-end', en: 'Back-end' }, items: ['Node.js', 'TypeScript', 'Integração B3'] },
      { group: { pt: 'Infra', en: 'Infra' }, items: ['AWS', 'Terraform', 'S3', 'CloudFront', 'CI/CD'] },
      { group: { pt: 'Operação', en: 'Operations' }, items: ['Logs', 'Métricas', 'Alertas', 'Métricas de produto'] },
      { group: { pt: 'Método', en: 'Method' }, items: ['Spec-Driven Development', 'Multiagentes', 'Claude Code'] },
    ],
    results: [
      { value: '4', label: { pt: 'módulos: metas, balanço, investimentos e contas compartilhadas', en: 'modules: goals, balance, investments and shared accounts' } },
      { value: 'B3', label: { pt: 'importação de ativos com cotação em tempo real', en: 'asset import with real-time quotes' } },
      { value: 'iOS + Android', label: { pt: 'a partir de uma base de código em React Native', en: 'from a single React Native codebase' } },
    ],
    learnings: {
      pt: [
        'Ligar metas a ativos reais mudou o produto. Progresso calculado a partir da carteira é mais honesto do que um número que alguém precisa lembrar de atualizar.',
        'Regras financeiras pedem spec escrita e teste automatizado antes do código. Foi onde o Spec-Driven Development mais se pagou.',
        'Reaproveitar a infraestrutura do YellowJobs deu ao Moosy um primeiro deploy rápido e uma base que melhora para os dois quando melhora para um.',
        'Um app de uso diário precisa de interface calma. Cada tela que tentou mostrar tudo perdeu para a que mostrou o número certo.',
      ],
      en: [
        'Tying goals to real assets changed the product. Progress computed from the portfolio is more honest than a number someone has to remember to update.',
        'Financial rules call for a written spec and automated tests before the code. That is where Spec-Driven Development paid off the most.',
        'Reusing YellowJobs’ infrastructure gave Moosy a fast first deploy and a foundation that improves for both when it improves for one.',
        'A daily-use app needs a calm interface. Every screen that tried to show everything lost to the one that showed the right number.',
      ],
    },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
