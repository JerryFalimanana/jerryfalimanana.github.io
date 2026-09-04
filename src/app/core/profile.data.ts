/** `title`, `subtitle`, `location` et `summary` portent des clés de
 *  traduction, pas du texte : ils doivent passer par le pipe transloco. */
export interface Profile {
  readonly name: string;
  readonly title: string;
  readonly subtitle: string;
  readonly location: string;
  readonly email: string;
  readonly phone: string;
  readonly whatsapp: string;
  readonly linkedin: string;
  readonly github: string;
  readonly summary: string;
}

export interface ExperienceItem {
  readonly key: string;
  readonly tags: readonly string[];
}

export interface EducationItem {
  readonly key: string;
}

export interface SkillGroup {
  readonly key: string;
  readonly items: readonly string[];
}

export interface ProjectItem {
  readonly key: string;
  readonly name: string;
  readonly category: string;
  readonly tags: readonly string[];
  readonly repositoryUrl: string;
  readonly liveUrl?: string;
  readonly liveLabel?: string;
  readonly accent: 'primary' | 'accent';
}

export const PROFILE: Profile = {
  name: 'Jerry Falimanana Ratsimbajaona',
  title: 'profile.title',
  subtitle: 'profile.subtitle',
  location: 'profile.location',
  email: 'ratsimbajaona1006@gmail.com',
  phone: '+261 32 73 636 79',
  whatsapp: '+261327363679',
  linkedin: 'https://www.linkedin.com/in/jerryfalimanana/',
  github: 'https://github.com/JerryFalimanana',
  summary: 'about.profile.summary',
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    key: 'experience.items.scoplanV2',
    tags: ['Symfony 7', 'Angular 19', 'Tailwind', 'Docker', 'MySQL', 'REST'],
  },
  {
    key: 'experience.items.scoplan',
    tags: ['Symfony 3/4', 'React.js', 'Twig', 'Docker', 'MySQL', 'jQuery'],
  },
  {
    key: 'experience.items.myagency',
    tags: ['Symfony 4', 'API Platform', 'Docker', 'MySQL', 'TDD'],
  },
  {
    key: 'experience.items.esokia',
    tags: ['Symfony 4', 'API Platform', 'React.js', 'MySQL', 'REST'],
  },
  {
    key: 'experience.items.freelance',
    tags: ['Symfony 4/5', 'API Platform', 'React.js', 'Docker', 'MySQL'],
  },
];

export const EDUCATION: EducationItem[] = [
  { key: 'education.items.ispm' },
  { key: 'education.items.chemistry' },
  { key: 'education.items.baccalaureate' },
];

export const SKILLS: SkillGroup[] = [
  {
    key: 'skills.groups.backend',
    items: ['php', 'symfony', 'apiPlatform', 'twig', 'sylius', 'rest'],
  },
  {
    key: 'skills.groups.frontend',
    items: [
      'javascript',
      'typescript',
      'react',
      'angular',
      'jquery',
      'html',
      'css',
      'tailwind',
    ],
  },
  {
    key: 'skills.groups.database',
    items: ['mysql', 'mariadb', 'sql', 'merise', 'uml', 'modeling'],
  },
  {
    key: 'skills.groups.tooling',
    items: ['docker', 'git', 'gitlab', 'phpstorm', 'vscode', 'linux', 'trello'],
  },
  {
    key: 'skills.groups.methods',
    items: ['agile', 'tdd', 'solid', 'oop', 'requirements'],
  },
];

export const PROJECTS: readonly ProjectItem[] = [
  {
    key: 'projects.crm',
    name: 'CRM',
    category: 'Symfony',
    tags: ['Symfony', 'API Platform', 'MySQL', 'Docker', 'REST'],
    repositoryUrl: 'https://github.com/JerryFalimanana',
    accent: 'accent',
  },
  {
    key: 'projects.travel',
    name: 'Travel',
    category: 'Symfony / React',
    tags: ['Symfony', 'React.js', 'API Platform', 'MySQL', 'Twig'],
    repositoryUrl: 'https://github.com/JerryFalimanana',
    accent: 'accent',
  },
];
