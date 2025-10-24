import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [tick, setTick] = useState(0);

  const videos = [
    {
      src: "./video-1.mp4",
      id: 1,
    },
    {
      src: "./video-2.mp4",
      id: 2,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((prevTick) => prevTick + 1);
    }, 30 * 1000);

    return () => clearInterval(timer);
  }, []);

  let content;

  if (tick % 2 === 0) {
    content = <video src={videos[0].src} alt="aniversariante" autoPlay muted></video>;
  } else {
    content = <video src={videos[1].src} alt="aniversariante" autoPlay muted></video>;
  }

  return content;
}

export default App;
