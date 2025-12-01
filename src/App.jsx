import { useState, useEffect } from "react";

import "./App.css";

// const content = [
//   { url: "./image-1.png", type: "image" },
//   { url: "./image-2.png", type: "image" },
// ];

function App() {
  // const [tick, setTick] = useState(0);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTick((prev) => (prev + 1) % content.length);
  //   }, 30000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return <video src="video-1.mp4" className="video" autoPlay muted loop />;
}

export default App;
