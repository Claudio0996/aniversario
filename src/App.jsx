import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((prevTick) => prevTick + 1);
    }, 30 * 1000);

    return () => clearInterval(timer);
  }, []);

  return <img className="image" src={`./bg-orcablack.png`} alt="OrcaFascio Img" />;
}

export default App;
