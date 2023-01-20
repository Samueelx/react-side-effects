import { useEffect, useState } from 'react';
import './App.css';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("running...");
      setTime(new Date());
    }, 1000);

    return () => {
      console.log("cleanup");
      clearInterval(intervalId);
    }
  }, []);

  return <div>{time.toString()}</div>
}

function App() {
  const[showClock, setShowClock] = useState(true);

  return (
    <>
    {showClock ? <Clock /> : null}
    <button onClick={() => setShowClock(false)}>Hide Clock</button>
    </>
  );
}

export default App;
