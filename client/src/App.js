import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import BenefitsPage from './components/BenefitsPage';
import Navbar from "./components/Navbar";
import MoodSelector from "./components/MoodSelector";
import MoodInsights from "./components/MoodInsights";
import MoodChart from "./components/MoodChart";
import "./App.css";

const App = () => {
  const [moodHistory, setMoodHistory] = useState([]);

  const handleMoodSelect = (mood) => {
    setMoodHistory([
      ...moodHistory,
      { mood, timestamp: new Date().toISOString() },
    ]);
  };

  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/moodtracker"
            element={
              <>
                <h1 className="title">Mood Tracker</h1>
                <MoodSelector onMoodSelect={handleMoodSelect} />
                <MoodInsights moodHistory={moodHistory} />
                <MoodChart moodHistory={moodHistory} />
              </>
            }
          />
          <Route path="/benefits" element={<BenefitsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
