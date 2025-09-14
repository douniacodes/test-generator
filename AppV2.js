import { useState } from 'react';
import './App.css';

function App() {
  const [currentIdea, setCurrentIdea] = useState('');

  // --- LISTES POUR LE MODE RÉALISTE ---
  const themes = [
    'de santé', 'de musique', 'de voyage', 'd’éducation', 'de productivité',
    'de finance', 'de sport', 'de jeux', 'd’alimentation', 'de cinéma',
    'de lecture', 'écologique', 'de transport', 'de mode', 'de photographie',
    'd’animaux', 'de technologie', 'd’art', 'de cuisine', 'd’histoire',
    'de bien-être', 'de jardinage', 'de bricolage', 'de météo', 'd’astronomie',
    'de langues étrangères', 'de généalogie', 'de méditation', 'de développement personnel'
  ];

  const features = [
    'avec un système de chat en temps réel',
    'avec un dashboard interactif et des graphiques',
    'qui envoie des notifications push/email',
    'basée sur la géolocalisation',
    'avec un mode hors ligne',
    'avec une API publique documentée',
    'qui stocke les données des utilisateurs de manière sécurisée',
    'avec un générateur de rapports PDF',
    'connectée aux réseaux sociaux',
    'qui fonctionne en PWA (Progressive Web App)',
    'avec un système de gamification et de badges',
    'qui intègre un calendrier partagé',
    'avec de l’analyse de données avancée',
    'avec reconnaissance vocale',
    'avec un chatbot intégré utilisant l\'IA',
    'qui recommande du contenu personnalisé',
    'avec authentification multi-utilisateurs et rôles',
    'qui permet l\'export de données en CSV/JSON',
    'avec un dark mode natif et thème personnalisable',
    'avec système de paiement intégré',
    'avec synchronisation multi-appareils',
    'avec mode accessibilité (lecteur d\'écran, etc.)',
    'avec intégration à des services tiers (Google, Facebook, etc.)',
    'avec système de recherche avancée et filtres',
    'avec historique des actions et versionning'
  ];

  // --- LISTES POUR LE MODE ABSURDE ---
  const absurdes = [
    'la météo des licornes avec prévision des arcs-en-ciel',
    'un tracker de baguettes de pain avec indice de croustillant',
    'un réseau social pour plantes grasses avec likes à l\'eau',
    'un jeu de combat entre chats et imprimantes en 8-bit',
    'un calendrier des siestes de ton voisin avec alertes sonores',
    'un détecteur de chaussettes perdues avec localisation GPS',
    'un simulateur de files d’attente à la poste en réalité virtuelle',
    'une app de méditation pour poules avec coquilles stéréo',
    'un générateur de recettes à base de cailloux avec notation gastronomique',
    'un assistant vocal qui ne dit que "non" avec 50 intonations différentes',
    'un site pour comparer les bruits d’aspirateurs par marque et modèle',
    'un marketplace de dessins d’enfants avec NFT intégrés',
    'une appli qui classe les nuages en temps réel par forme et drôlerie',
    'un traducteur de miaulements avec reconnaissance des accents félins',
    'un Tinder pour légumes moches avec algorithmes de matching',
    'un GPS pour retrouver tes clés perdues avec commande vocale énervée',
    'une appli pour compter combien de fois tu éternues avec statistiques annuelles',
    'un simulateur de boutons de micro-ondes avec sons authentiques',
    'une app pour noter les bancs publics avec critères de confort et vue',
    'un réseau social pour statues avec filtre de beauté en marbre',
    'un compétiteur de concours de bâillement avec détection faciale',
    'un générateur d\'excuses aléatoires pour arriver en retard',
    'une app qui transforme les ronflements en mélodies electroniques',
    'un système d\'échange de poussière entre collectionneurs',
    'un coach virtuel pour apprendre à faire des bulles de chewing-gum parfaites'
  ];


  // --- GÉNÉRATEURS ---
  const generateRealisticIdea = () => {
    const theme = themes[Math.floor(Math.random() * themes.length)];
    const feature = features[Math.floor(Math.random() * features.length)];
    setCurrentIdea(`Application ${theme} ${feature}`);
  };

  const generateAbsurdIdea = () => {
    const idea = absurdes[Math.floor(Math.random() * absurdes.length)];
    setCurrentIdea(`Créer ${idea}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="/logo.png" className="App-logo" alt="logo" />
        <h1>Génère des idées réalistes ou absurdes en un clic !</h1>

        <div className="idea-container">
          {currentIdea ? (
            <div className="idea-card">
              <h2>Votre prochaine idée :</h2>
              <p>{currentIdea}</p>
            </div>
          ) : (
            <p>Cliquez sur un bouton pour générer une idée !</p>
          )}
        </div>

        <div className="buttons">
          <button onClick={generateRealisticIdea} className="generate-btn">
            Mode Réaliste
          </button>
          <button onClick={generateAbsurdIdea} className="generate-btn absurd">
            Mode Absurde
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;



.App {
  text-align: center;
}

.App-header {
  background: linear-gradient(135deg, #010028 0%, #000000 100%);
  min-height: 100vh;
  padding: 40px 20px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

p {
  font-size: 1.2rem;
  color: #cccccc;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
}

.idea-container {
  margin: 30px 0;
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.idea-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 25px;
  max-width: 500px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.idea-card h2 {
  margin-top: 0;
  color: #d9f6ff;
  font-size: 1.6rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
}

.generate-btn {
  background: #460472;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.generate-btn:hover {
  background: #f0d9ff;
  color: #000000;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(184, 107, 255, 0.4);
}
