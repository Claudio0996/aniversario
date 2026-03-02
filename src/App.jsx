import { useState, useEffect } from "react";

import "./App.css";

const content = [
  { url: "./video-1.mp4", type: "video" },
  { url: "./video-2.mp4", type: "video" },
  { url: "./video-3.mp4", type: "video" },
  { url: "./video-4.mp4", type: "video" },
  { url: "./video-5.mp4", type: "video" },
  { url: "./video-6.mp4", type: "video" },
  { url: "./video-7.mp4", type: "video" },
  { url: "./video-8.mp4", type: "video" },
  { url: "./video-9.mp4", type: "video" },
  { url: "./video-10.mp4", type: "video" },
  { url: "./video-11.mp4", type: "video" },
  { url: "./video-12.mp4", type: "video" },
  { url: "./video-13.mp4", type: "video" },
  { url: "./video-14.mp4", type: "video" },
  { url: "./video-15.mp4", type: "video" },
  { url: "./video-16.mp4", type: "video" },
  { url: "./video-17.mp4", type: "video" },
  { url: "./video-18.mp4", type: "video" },
  { url: "./video-19.mp4", type: "video" },
  { url: "./video-20.mp4", type: "video" },
  { url: "./image-1.png", type: "image" },
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

  let contentAvailable = content[tick];

  return <>{contentAvailable.type === "video" ? <video src={`${contentAvailable.url}?=tick=${tick}`} className="image" autoPlay loop muted /> : <img className="image" src={`${contentAvailable.url}?=${tick}`} />}</>;
}

export default App;
