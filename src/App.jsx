import { useState, useEffect } from "react";

import "./App.css";

const content = [
  { url: "./video-1.mp4", type: "video" },
  { url: "./video-2.mp4", type: "video" },
];

function App() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((prev) => (prev + 1) % content.length);
    }, 30000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <video src={`${content[tick].url}?=${tick}`} className="video" autoPlay muted loop />;
}

export default App;
