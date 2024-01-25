import { useState } from "react";

export function Counter() {
  const [count, setCounter] = useState(0);
  const increment = () => setCounter(count + 1);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
