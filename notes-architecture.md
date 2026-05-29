# Notes architectures

## Constatations

- Tout le code est dans le fichier App.tsx
- Il n'y a aucun typage strict (any)
- Il y a plusieurs composants dans le même fichier
- Les données mockup sont chargés directement dans le fichier
- L'UI et la logique fonctionelle sont mélangés
- Il y a des composants non utilisés dans le fichier (Détail: Country)
- Le fichier n'a pas été nettoyé, présence de console.log()
- React-router-dom est installé mais il n'y pas de gestion des routes

## Recommandations

- Créer une architecture de fichiers, pour séparer les composants smart / dumb et l'UI et la logique fonctionelle
- Créer un typage strict pour chaque objet utilisé sur le front
- Ajouter des Hooks pour charger les données mockup afin de pouvoir utiliser facielemnt une API dans le futur
- Gestion du chargement de la donnée et des erreurs
- Ne pas oublier de nettoyer le fichier avant de faire un push (enlever les console.log())

## Améliorations

- Créer la route dans une fichier à part
- Ajouter des Wireframes ou maquettes pour mettre en place le DDD
- Créer une palette de couleur fixe avec tailwind pour un design system "light"
- Créer les fonctions et les composants en ayant à l'esprit leur évolution fonctionelle (par exemple chargement dynamique de données via API)
- ajout d'un switch light / dark
- créer une version version plus réactive (mobile / desktop)

## Arborescence

```
src/app/
├── App.tsx - Fichier de render
├── routes.tsx - gestion des routes
├── components/
│   ├── Indicator/
│   │   └── Indicator.tsx - Carte format de nombre - Dumb
│   ├── MedalChart/
│   │   └── MedalChart.tsx - Graphique camembert tous les pays - Dumb
│   └── EvolutionChart/
│       └── EvolutionChart.tsx - Graphique ligne médaille par pays - Dumb
├── pages/
│   ├── DashboardPage/
│   │   └── DashboardPage.tsx - page d'accueil dashboard - smart
│   └── CountryPage/
│       └── CountryPage.tsx - page de détail country - smart
├── hooks/
│   └── useData.ts  - datafetching (mockup avec useEffect)
└── models/
    └── models.ts - définition des types

```
