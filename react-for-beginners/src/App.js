import { useEffect, useState } from "react";
function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("render");
  useEffect(() => console.log("hello"), []);
  return (
    <div>
      <button onClick={onClick}>click me {counter}</button>
    </div>
  );
}

export default App;
