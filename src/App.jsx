import { useState, useEffect } from "react";

import "./App.css";

const content = [
  { url: "./image-1.png", type: "image" },
  { url: "./video-1.mp4", type: "video" },
  { url: "./video-2.mp4", type: "video" },
  { url: "./video-3.mp4", type: "video" },
  { url: "./video-4.mp4", type: "video" },
  { url: "./video-5.mp4", type: "video" },
  { url: "./video-8.mp4", type: "video" },
  { url: "./video-9.mp4", type: "video" },
  { url: "./video-10.mp4", type: "video" },
  { url: "./video-6.mp4", type: "video" },
  { url: "./video-7.mp4", type: "video" },
  { url: "./image-2.png", type: "image" },
  { url: "./image-3.png", type: "image" },
  { url: "./image-4.png", type: "image" },
];

function App() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((prev) => (prev + 1) % content.length);
    }, 15000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  let contentAvailable = content[tick];
  return <>{contentAvailable.type === "video" ? <video src={`${contentAvailable.url}?=${tick}`} className="video" autoPlay loop muted /> : <img className="image" src={`${contentAvailable.url}?=${tick}`} />}</>;
}

export default App;
