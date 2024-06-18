import React from 'react';
import './DifficultySelector.css';

function DifficultySelector({ onSelect }) {
  const levels = ['Easy', 'Medium', 'Hard'];

  return (
    <div className="difficulty-selector">
      <h2>Select Difficulty Level</h2>
      <div className="levels">
        {levels.map(level => (
          <div key={level} className="level-card" onClick={() => onSelect(level)}>
            {level}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DifficultySelector;
