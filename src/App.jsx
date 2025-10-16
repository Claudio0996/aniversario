import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [tick, setTick] = useState(0);

  // timestamp único por build
  const buildVersion = new Date().getTime();

  const content = [
    { type: "img", src: "bg-orcablack.png" },
    { type: "video", src: "video-aniversario-alex.mp4" },
    { type: "video", src: "video-aniversario-orcafascio.mp4" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((prevTick) => (prevTick + 1) % content.length);
    }, 30 * 1000);

    return () => clearInterval(timer);
  }, [content.length]);

  const current = content[tick];

  return <>{current.type === "img" ? <img className="image" src={`./${current.src}?v=${buildVersion}-${tick}`} alt="Conteúdo dinâmico" /> : <video className="image" src={`./${current.src}?v=${buildVersion}-${tick}`} autoPlay muted loop />}</>;
}

export default App;
