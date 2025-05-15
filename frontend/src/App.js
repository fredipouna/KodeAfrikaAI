import "./App.css";


import React, { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  

  const handleSearch = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:5000/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });
  
    const data = await response.json();
    setResults(data.results || []);
    setLoading(false);
  };
  

  return (
    <div className="App">
      <h1>KodeAfrika AI</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Entrez une question ou un sujet..."
      />
      <button onClick={handleSearch}>Rechercher</button>

      {loading ? (
  <p>Recherche en cours...</p>
) : (
  <ul>
    {results.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
)}

      <ul>
        {results.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
    
    
    
  );
}

export default App;
