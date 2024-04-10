import React from 'react';

const MoodInsights = ({ moodHistory }) => {
  let moodCounts = {};
  for (let entry of moodHistory) {
    if (moodCounts[entry.mood]) {
      moodCounts[entry.mood] += 1 ;
    } else {
      moodCounts[entry.mood] = 1;
    }
  }
  let mostCommonMood = '';
  let maxCount = 0;
  for (let mood in moodCounts) {
    if (moodCounts[mood] > maxCount) {
      mostCommonMood = mood;
      maxCount = moodCounts[mood];
    }
  }

  return (
    <div>
      <h2>Mood Insights</h2>
      <p>Most Common Mood: {mostCommonMood}</p>
    </div>
  );
};

export default MoodInsights;
