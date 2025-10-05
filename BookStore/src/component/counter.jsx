import { useState } from "react";
function Counter() {
// Khai báo state
const [count, setCount] = useState(0);
const [step, setStep] = useState(1);


const increaseCount = () => setCount(pre => pre + 1);
const increaseStep = () => setStep(pre => pre + 1);


return (
    <div style={{ padding: 20 }}>
      <h1>🧮 Bộ đếm React</h1>
      <h1>Count: {count}</h1>
      <h1>Step: {step}</h1>

      <input
        type="number"
        value={step}
        onChange={(e) => setStep(pre => Number(e.target.value) + pre )}
      />

<button onClick={() => setCount(count + step)}>+</button>
      <button onClick={() => setCount(count - step)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );

}

export default Counter