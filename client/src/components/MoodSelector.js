import React from 'react';
import '../styles/MoodSelector.css';


const MoodSelector = ({ onMoodSelect }) => {
  const moods = ['Excited', 'Happy', 'Neutral', 'Anxious', 'Sad', 'Angry'];

  return (
    <div className="mood-selector">
      {moods.map((mood) => (
        <button key={mood} onClick={() => onMoodSelect(mood)}>
          {mood}
        </button>
      ))}
    </div>
  );
};

export default MoodSelector;
