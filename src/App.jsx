import { useState, useEffect } from "react";

import "./App.css";

const content = [{ url: "./image-1.png", type: "image" }];

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

  let contentAvailable = content[tick];

  return <>{contentAvailable.type === "video" ? <video src={`${contentAvailable.url}?=${tick}`} className="image" autoPlay loop muted /> : <img className="image" src={`${contentAvailable.url}?=${tick}`} />}</>;
}

export default App;
