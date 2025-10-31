import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((prev) => prev + 1);
    }, 30000);

    return () => {
      clearInterval(timer);
    };
  }, [tick]);

  return <>{tick % 2 === 0 ? <video autoPlay muted src={`./video-1.mp4?tick=${tick}`} className="video"></video> : <video autoPlay muted src={`./video-2.mp4?tick=${tick}`} className="video"></video>}</>;
}

export default App;
