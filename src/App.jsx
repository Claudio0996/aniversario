import { useState, useEffect } from "react";

import "./App.css";

// const content = [{ url: "./slide-1.jpg" }, { url: "./slide-2.jpg" }, { url: "./slide-3.jpg" }, { url: "./slide-4.jpg" }, { url: "./slide-5.jpg" }];

function App() {
  // const [tick, setTick] = useState(0);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTick((prev) => (prev + 1) % content.length);
  //   }, 20000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return <video src={`./video-1.mp4`} className="video" autoPlay muted />;
}

export default App;
