const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// 🔮 Réponses simulées pour certaines requêtes
const fakeAIResponses = {
  "agriculture intelligente": [
    "L'agriculture intelligente utilise l'IA pour optimiser les récoltes.",
    "Elle réduit les pertes grâce à la surveillance en temps réel.",
    "Des capteurs permettent d'évaluer l'humidité du sol et la météo."
  ],
  "chatbot en Afrique": [
    "Les chatbots facilitent l'accès à l'information en langues locales.",
    "Ils peuvent aider dans la santé, l’éducation ou l’agriculture.",
    "Un chatbot bien conçu peut fonctionner même en mode hors-ligne."
  ],
  "kodeafrika": [
    "KodeAfrika est une initiative pour promouvoir l'IA en Afrique.",
    "Elle vise à démocratiser la technologie pour les jeunes Africains.",
    "Le projet offre des ressources gratuites pour apprendre l'IA."
  ]
};

app.post("/search", (req, res) => {
  const { query } = req.body;

  // Nettoie la requête utilisateur
  const cleanedQuery = query.trim().toLowerCase();

  // Cherche une réponse simulée
  const results = fakeAIResponses[cleanedQuery] || [
    `Aucune réponse trouvée pour "${query}". Essayez un autre mot-clé.`
  ];

  res.json({ results });
});

app.listen(PORT, () => {
  console.log(`✅ Backend en écoute sur http://localhost:${PORT}`);
});
