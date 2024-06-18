import React, { useState, useEffect } from 'react';
import './App1.css';
import DifficultySelector from './DifficultySelector';

function App1() {
  const [topics, setTopics] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedLevel, setSelectedLevel] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/topics')
      .then(response => response.json())
      .then(data => setTopics(data))
      .catch(error => console.error('Error fetching topics:', error));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (order) => {
    setSortOrder(order);
  };

  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
    alert(`You selected ${level} difficulty`);
  };

  const filteredTopics = topics
    .filter(topic => topic.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

  return (
    <div className="container">
      <h1>Topic Selection</h1>
      <div className="search-sort">
        <input 
          type="text" 
          placeholder="Search topics..." 
          value={searchTerm} 
          onChange={handleSearch} 
        />
        <button onClick={() => handleSort('asc')}>Sort A-Z</button>
        <button onClick={() => handleSort('desc')}>Sort Z-A</button>
      </div>
      <div className="grid">
        {filteredTopics.map(topic => (
          <div key={topic.id} className="card">
            <h3>{topic.name}</h3>
          </div>
        ))}
      </div>
      <DifficultySelector onSelect={handleLevelSelect} />
    </div>
  );
}

export default App1;
