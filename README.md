# Portfolio - Jerry Falimanana Ratsimbajaona

Portfolio personnel développé en Angular : application single-page responsive, disponible en français et en anglais, avec rendu côté serveur (SSR).

**Développeur Fullstack PHP/Symfony - React.js & Angular** · 6+ ans d'expérience · Antananarivo, Madagascar

[LinkedIn](https://www.linkedin.com/in/jerryfalimanana/) · [GitHub](https://github.com/JerryFalimanana) · [ratsimbajaona1006@gmail.com](mailto:ratsimbajaona1006@gmail.com)

## Stack du site

Angular 22 (standalone, signals, zoneless) · TypeScript · Tailwind CSS · Transloco (i18n FR/EN) · Angular SSR + Express · ESLint · Prettier

## Démarrer

```bash
npm install
npm start              # serveur de dev sur http://localhost:4200
```

## Scripts

| Commande | Description |
| --- | --- |
| `npm start` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run watch` | Build incrémental en mode développement |
| `npm test` | Tests unitaires (Karma / Jasmine) |
| `npm run lint` | Analyse ESLint |
| `npm run format` | Formatage Prettier |
| `npm run serve:ssr` | Sert le build SSR |
| `npm run serve:ssg` | Sert le build statique |

## Structure

```
src/app/
├── core/
│   ├── profile.data.ts     # source de vérité : profil, expériences, formations, compétences, projets
│   ├── i18n/               # service de langue + loader Transloco
│   └── seo/                # métadonnées, canonical, données structurées
├── layout/                 # navbar, footer
└── sections/               # hero, about, skills, experience, projects, education, contact
```

Les textes vivent dans `public/i18n/fr.json` et `public/i18n/en.json`. Les données structurantes (postes, dates, tags, liens) sont dans `src/app/core/profile.data.ts`, qui référence les clés de traduction.

## Compétences

**Backend** — PHP, Symfony 3/4/5/6/7, API Platform, Twig, Sylius, API REST
**Frontend** — JavaScript, TypeScript, React.js, Angular, jQuery, HTML5, CSS3, Tailwind CSS
**Bases de données** — MySQL, MariaDB, SQL, MERISE, UML
**Outils** — Docker, Git, GitLab, PHPStorm, VS Code, Linux, Trello
**Méthodes** — Agile / Scrum, TDD, SOLID, POO

## Langues

Français (95%) · Anglais (lu 95%, écrit 70%, parlé 60%) · Malgache (langue maternelle)
