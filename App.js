import { useState } from 'react';
import './App.css';

function App() {
  const [currentIdea, setCurrentIdea] = useState('');

  const projectIdeas = [
    'Application de gestion de tâches avec React et Node.js',
    'Bot Discord pour modération automatique',
    'API REST pour un système de blog avec authentification',
    'Jeu de puzzle en JavaScript vanilla',
    'Application mobile de suivi de fitness avec React Native',
    'Site e-commerce avec panier et paiement Stripe',
    'Générateur de mots de passe sécurisés',
    'Application de chat en temps réel avec Socket.io',
    'Dashboard d\'analytics avec graphiques interactifs',
    'Extension de navigateur pour productivité',
    'API de prédiction météo avec machine learning',
    'Jeu de cartes multijoueur en ligne'
  ];

  const generateIdea = () => {
    const randomIndex = Math.floor(Math.random() * projectIdeas.length);
    setCurrentIdea(projectIdeas[randomIndex]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 Générateur d'Idées de Projets</h1>
        <div className="idea-container">
          {currentIdea ? (
            <div className="idea-card">
              <h2>Votre prochaine idée :</h2>
              <p>{currentIdea}</p>
            </div>
          ) : (
            <p>Cliquez sur le bouton pour générer une idée !</p>
          )}
        </div>
        <button onClick={generateIdea} className="generate-btn">
          Générer une idée
        </button>
      </header>
    </div>
  );
}

export default App;
