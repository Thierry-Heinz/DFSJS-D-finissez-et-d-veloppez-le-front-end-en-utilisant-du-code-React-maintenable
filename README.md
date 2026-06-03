# TéléSport - Olympic Games History Dashboard

Interactive web application to visualize historical performance data of countries in the Olympic Games.

## 🚀 Features

- **Interactive Dashboard**: View medal counts by country with interactive charts
- **Country Details**: Explore detailed statistics for each participating country
- **Data Visualization**: Interactive charts powered by Chart.js
- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern Stack**: Built with React 19, TypeScript, and Tailwind CSS

## 📋 Prerequisites

- **Node.js** 22 LTS or higher
- **npm** (included with Node.js)

## 🛠️ Installation

Clone the repository:

```bash
git clone https://github.com/openclassrooms/p2-dfsjs.git
cd p2-dfsjs
```

Install dependencies:

```bash
npm install
```

## 🎯 Usage

### Development Server

Start the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:5173](http://localhost:5173)

### Production Build

Build the application for production:

```bash
npm run build
```

### Linting

Run the linter to check code quality:

```bash
npm run lint
```

## 📁 Project Structure

```
p2-dfsjs/
├── src/
│   └── app/
│       ├── components/
│       │   ├── EvolutionChart/
│       │   │   └── EvolutionChart.tsx // line Chart for Country / year / medals
│       │   ├── HeaderComponent/
│       │   │   └── HeaderComponent.tsx // Header + Navigation
│       │   ├── Indicator/
│       │   │   └── Indicator.tsx // Card format number display
│       │   ├── Layout/
│       │   │   └── Layout.tsx // reuseable page design
│       │   ├── MedalChart/
│       │   │   └── MedalChart.tsx // Pie chart for all countries/medals
│       │   ├── NotFound/
│       │   │   └── NotFound.tsx // Error Handling
│       │   └── SkeletonBlock/
│       │       └── SkeletonBlock.tsx // Loading animation
│       ├── hooks/
│       │   └── useData.ts // Data fetching and logic
│       ├── models/
│       │   └── models.ts // type definition
│       ├── pages/
│       │   ├── CountryPage/
│       │   │   └── CountryPage.tsx // detail page
│       │   └── DashboardPage/
│       │       └── DashboardPage.tsx // home page
│       ├── App.tsx // entry point
│       ├── routes.tsx // routing
│       ├── index.css // global styling
│       └── main.tsx // Root
├── eslint.config.js
├── index.html
├── olympicsData.json
├── package.json
├── tsconfig.app.json
├── tsconfig.json
└── .gitignore
```

## 🔧 Tech Stack

- **React 19** - UI library with latest features
- **TypeScript** - Static type checking
- **Vite 7** - Fast build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Router 6** - Client-side routing
- **Chart.js 4** - Interactive data visualization
- **ESLint** - Code quality and consistency

## 📊 Data

The application currently uses mock data to simulate Olympic Games statistics. This architecture is designed to facilitate future integration with a REST API backend.

The application use the custom hook useData.ts to fetch and filter the data

## 🧭 Routing

The routing of the application is handled by react-router in the route.tsx file

## ❗ Error Handling

The application handle errors with the coordinate use of react-router and the NotFound.tsx component.

## 🎨 Design

The application features:

- Clean, modern interface optimized for data visualization
- Responsive layout adapting to all screen sizes
- Interactive charts with hover effects
- Smooth navigation between pages

## 📚 Documentation

For more information on the technologies used:

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Router Documentation](https://reactrouter.com)
- [Chart.js Documentation](https://www.chartjs.org/docs/latest/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is available for educational and personal use.

---

**Built with React 19 + TypeScript + Vite + Tailwind CSS**
