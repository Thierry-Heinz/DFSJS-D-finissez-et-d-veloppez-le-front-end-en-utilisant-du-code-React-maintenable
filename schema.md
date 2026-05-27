src/app/
├── App.tsx - Fichier de render + gesiton de route
├── components/
│   ├── HeaderComponent.tsx - Entête réutilisable - Dumb
│   ├── Indicator.tsx - Carte format de nombre - Dumb
│   ├── CountriesPieChart.tsx - Graphique camembert tous les pays - Dumb
│   └── CountryLineChart.tsx - Graphique line médaille par pays - Dumb
├── pages/
│   └── DashboardPage.tsx - page d'accueil dashboard - Smart/
│       ├── CountryPage.tsx - page de détail country - Smart
│       └── NotFound.tsx - page gestion des erreurs - Dumb
├── hooks/
│   └── useData.ts - datafetching (mockup avec useEffect)
└── models/
    └── models.ts - définition des types