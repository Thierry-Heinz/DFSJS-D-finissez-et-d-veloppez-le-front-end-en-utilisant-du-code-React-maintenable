# ARCHITECTURE

## Description du projet

L'application TéléSport permet la consultation des données historiques des Jeux Olympiques et d'explorer les performances des pays au travers de leurs multiples éditions.
Construite en TypeScript/React, elle est constituée de deux pages : DashboardPage affichant les statistiques pour l'ensemble des pays, et CountryPage affichant le détail pour un pays donné.
L'application utilise le custom hook useData pour gérer le chargement des données et les états associés (loading, error, etc.).

---

## Arborescence

```
src/app/
├── App.tsx
├── routes.tsx
├── components/
│   ├── Indicator/
│   │   └── Indicator.tsx
│   ├── MedalChart/
│   │   └── MedalChart.tsx
│   └── EvolutionChart/
│       └── EvolutionChart.tsx
├── pages/
│   ├── DashboardPage/
│   │   └── DashboardPage.tsx
│   └── CountryPage/
│       └── CountryPage.tsx
├── hooks/
│   └── useData.ts
└── models/
    └── models.ts
```

---

## Détails des composants

### `App.tsx`

Charge la définition des routes depuis `routes.tsx`.

### `routes.tsx`

Définition des routes de l'application.

### `components/Indicator/Indicator.tsx`

Affiche un nombre avec un label formaté. Composant dumb.

### `components/MedalChart/MedalChart.tsx`

Traite et affiche un pie chart du total des médailles pour l'ensemble des pays. Composant smart.

### `components/EvolutionChart/EvolutionChart.tsx`

Traite et affiche un line chart du total des médailles par année et par pays. Composant smart.

### `pages/DashboardPage/DashboardPage.tsx`

Page d'accueil. Vérifie et affiche les composants pour l'ensemble des pays ainsi que le pie chart. Composant smart.

### `pages/CountryPage/CountryPage.tsx`

Page de détail. Vérifie et affiche les composants pour un pays donné ainsi que le line chart. Composant smart.

### `hooks/useData.ts`

Hook centralisé qui fetch les données de l'application et gère les états `loading` et `error`. Utilise un `try/catch` pour faciliter le remplacement des données mockées par un `fetch()` réel.

### `models/models.ts`

Définition des interfaces `Participation` et `Olympic`, partagées entre les composants pour assurer la cohérence des types.
