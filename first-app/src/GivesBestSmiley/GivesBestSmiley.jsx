import React, { useState } from 'react';

const SMILEYS = [
  { id: 1, emoji: "😀" },
  { id: 2, emoji: "😍" },
  { id: 3, emoji: "🤔" },
  { id: 4, emoji: "🥳" },
];

function Smiley({ id, emoji }) {
  const [votes, setVotes] = useState(0);

  const handleClick = () => {
    setVotes(votes + 1);
  };

  return (
    <div>
      <span>{emoji}</span>
      <button onClick={handleClick}>Vote</button>
      <span>{votes} votes</span>
    </div>
  );
}

function GiveBestSmiley() {
  const [showResult, setShowResult] = useState(false);

  const handleClick = () => {
    setShowResult(true);
  };

  const getWinningSmiley = () => {
    let maxVotes = 0;
    let winningSmiley = null;
    SMILEYS.forEach(smiley => {
      if (smiley.votes > maxVotes) {
        maxVotes = smiley.votes;
        winningSmiley = smiley;
      }
    });
    return winningSmiley;
  };

  return (
    <div>
      {SMILEYS.map(smiley => (
        <Smiley key={smiley.id} id={smiley.id} emoji={smiley.emoji} />
      ))}
      <button onClick={handleClick}>Show Results</button>
      {showResult && (
        <div>
          Winning smiley: {getWinningSmiley().emoji}
        </div>
      )}
    </div>
  );
}

export default GiveBestSmiley;