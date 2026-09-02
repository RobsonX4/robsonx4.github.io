import type { L } from './site';

/** Rótulos de interface (navegação, seções, botões). */
export const ui = {
  nav: {
    home: { pt: 'Início', en: 'Home' } as L,
    about: { pt: 'Sobre', en: 'About' } as L,
    projects: { pt: 'Projetos', en: 'Projects' } as L,
    contact: { pt: 'Contato', en: 'Contact' } as L,
  },
  hero: {
    cta: { pt: 'Ver projetos', en: 'View projects' } as L,
  },
  sections: {
    portfolio: { pt: 'Portfólio', en: 'Portfolio' } as L,
    selectedWork: { pt: 'Trabalhos selecionados', en: 'Selected work' } as L,
    selectedWorkSub: {
      pt: 'Produtos que eu tirei do papel. Em cada um, qual era o problema, como foi resolvido e o que ficou de aprendizado.',
      en: 'Products I built from the ground up. For each one: what the problem was, how it was solved, and what I took away.',
    } as L,
    about: { pt: 'Quem sou', en: 'Who I am' } as L,
    skills: { pt: 'Stack', en: 'Stack' } as L,
    skillsSub: {
      pt: 'O que eu uso no dia a dia para construir e operar sistemas. Back-end é onde passo a maior parte do tempo.',
      en: 'What I use day to day to build and run systems. Back-end is where I spend most of my time.',
    } as L,
    technologies: { pt: 'Tecnologias', en: 'Technologies' } as L,
    certification: { pt: 'Certificação', en: 'Certification' } as L,
    primaryStack: { pt: 'Stack principal', en: 'Main stack' } as L,
    career: { pt: 'Carreira', en: 'Career' } as L,
    experience: { pt: 'Trajetória', en: 'Experience' } as L,
    experienceSub: {
      pt: 'De sistemas corporativos em Java a plataformas financeiras distribuídas, passando por consultoria, SaaS próprio e produto de assinatura.',
      en: 'From enterprise Java systems to distributed financial platforms, by way of consultancy, my own SaaS and a subscription product.',
    } as L,
    learning: { pt: 'Estudo', en: 'Learning' } as L,
    education: { pt: 'Formação e certificação', en: 'Education and certification' } as L,
  },
  sheet: {
    now: { pt: 'Atualmente', en: 'Currently' } as L,
    base: { pt: 'Base', en: 'Based in' } as L,
    education: { pt: 'Formação', en: 'Education' } as L,
    focus: { pt: 'Foco', en: 'Focus' } as L,
  },
  project: {
    all: { pt: 'Todos os projetos', en: 'All projects' } as L,
    allSub: {
      pt: 'Cada case abaixo descreve o contexto, as decisões técnicas e o que eu tiraria diferente se começasse hoje.',
      en: 'Each case below covers the context, the technical decisions and what I would do differently starting today.',
    } as L,
    role: { pt: 'Meu papel', en: 'My role' } as L,
    year: { pt: 'Período', en: 'Period' } as L,
    context: { pt: 'O contexto', en: 'The context' } as L,
    challenges: { pt: 'Os desafios', en: 'The challenges' } as L,
    approach: { pt: 'Como foi feito', en: 'How it was built' } as L,
    architecture: { pt: 'Arquitetura', en: 'Architecture' } as L,
    stack: { pt: 'Stack', en: 'Stack' } as L,
    results: { pt: 'Resultados', en: 'Results' } as L,
    learnings: { pt: 'O que eu aprendi', en: 'What I learned' } as L,
    visit: { pt: 'Visitar', en: 'Visit' } as L,
    code: { pt: 'Código', en: 'Code' } as L,
    readCase: { pt: 'Ler o case', en: 'Read the case' } as L,
    back: { pt: 'Voltar aos projetos', en: 'Back to projects' } as L,
    next: { pt: 'Próximo projeto', en: 'Next project' } as L,
  },
  footer: {
    rights: { pt: 'Todos os direitos reservados.', en: 'All rights reserved.' } as L,
    email: { pt: 'E-mail', en: 'Email' } as L,
  },
  theme: {
    toggle: { pt: 'Alternar tema', en: 'Toggle theme' } as L,
  },
  lang: {
    switch: { pt: 'Switch to English', en: 'Ver em português' } as L,
  },
  notFound: {
    title: { pt: 'Página não encontrada', en: 'Page not found' } as L,
    body: { pt: 'O endereço que você abriu não existe por aqui.', en: 'The address you opened does not exist here.' } as L,
    cta: { pt: 'Ir para o início', en: 'Go home' } as L,
  },
};
