import React, { useState } from 'react';
import Navbar from './components/Navbar';
import EmojiPicker from './components/EmojiPicker';
import Ticker from './components/Ticker';
import Leaderboard from './components/Leaderboard';
import TeamSection from './components/TeamSection';
import FAQSection from './components/FAQSection';
import SwapInterface from './components/SwapInterface';

const App = () => {
  const [emoji, setEmoji] = useState('');
  const [data, setData] = useState({});

  // Fetch leaderboard data, team info etc.
  const fetchData = async () => {
    // API calls to fetch data
  };

  return (
    <div className="App">
      <Navbar />
      <EmojiPicker emoji={emoji} setEmoji={setEmoji} />
      <Ticker />
      <Leaderboard data={data.leaderboard} />
      <TeamSection data={data.teams} />
      <FAQSection data={data.faqs} />
      <SwapInterface />
    </div>
  );
};

export default App;