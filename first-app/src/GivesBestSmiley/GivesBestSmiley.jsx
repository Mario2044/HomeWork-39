import React, { useState } from 'react';

const SMILEYS = [
  {id: 1, icon: '😀'},
  {id: 2, icon: '😍'},
  {id: 3, icon: '😂'},
  {id: 4, icon: '🤔'},
];

const GiveBestSmiley = () => {
  const [smileys, setSmileys] = useState(SMILEYS);
  const [counts, setCounts] = useState({});

  const handleClick = (id) => {
    const newCounts = {...counts};
    newCounts[id] = (counts[id] || 0) + 1;
    setCounts(newCounts);
  };

  const handleShowResults = () => {
    const maxCount = Math.max(...Object.values(counts));
    const winningSmileys = smileys.filter((smiley) => counts[smiley.id] === maxCount);
    alert(`Winning smileys: ${winningSmileys.map((smiley) => smiley.icon).join(' ')}`);
  };

  return (
    <>
    <h2>Smiley List</h2>
    <ul>
      {smileys.map((smiley) => (
        <li key={smiley.id}>
          {smiley.icon}{' '}
          <button onClick={() => handleClick(smiley.id)}>
           {counts[smiley.id] || 0}
          </button>
        </li>
      ))}
    </ul>
    <button onClick={handleShowResults}>Show Results</button>
    </>
  );
};

export default GiveBestSmiley;