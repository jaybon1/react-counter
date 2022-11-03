import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <h2>{number}</h2>
      <button onClick={() => setNumber(number + 1)}>+</button>
    </div>
  );
}

export default App;
