import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    let timer = null;
    if (toggle) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [count, toggle]);

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <div className="App">
      <p> {count} times</p>
      <button onClick={handleToggle}>{!toggle ? "Start" : "Stop"}</button>
    </div>
  );
}
