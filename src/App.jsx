import { useState, useEffect } from "react";

import "./App.css";

const content = [
  { url: "./image-1.png", type: "image" },
  { url: "./image-2.png", type: "image" },
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

  return <>{<img src={`${content[tick].url}?tick=${tick}`} className="image"></img>}</>;
}

export default App;
