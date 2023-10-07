import { useState } from 'react';

const useVisualMode = (initialMode) => {
  const [mode, setMode] = useState(initialMode);
  const [history, setHistory] = useState([initialMode]);

  const transition = (newMode, replace = false) => {
    setMode(newMode);
    if (replace) {
      // Replace the current mode in history
      setHistory((prevHistory) => [...prevHistory.slice(0, -1), newMode]);
    } else {
      setHistory((prevHistory) => [...prevHistory, newMode]);
    }
  };

  const back = () => {
    if (history.length > 1) {
      // Go back to the previous mode
      const newHistory = history.slice(0, -1);
      setHistory(newHistory);
      setMode(newHistory[newHistory.length - 1]);
    }
  };

  return { mode, transition, back };
};

export default useVisualMode;
