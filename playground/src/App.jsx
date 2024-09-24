import { useState } from "react";

function App() {
  const [clicks, setClicks] = useState({ left: 0, right: 0 });
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleleftClicks = () => {
    setAll(allClicks.concat("L"));
    setClicks({ ...clicks, left: clicks.left + 1 });
    console.log("left before", clicks.left);
    setTotal(clicks.left + clicks.right);
    console.log("left after", clicks.left);
  };

  const handlerightClicks = () => {
    setAll(allClicks.concat("R"));
    setClicks({ ...clicks, right: clicks.right + 1 });
    setTotal(clicks.left + clicks.right);
  };

  return (
    <>
      {clicks.left}
      <button onClick={handleleftClicks}>Left</button>
      <button onClick={handlerightClicks}>Right</button>
      {clicks.right}
      <p>{allClicks.join(" ")}</p>
      <p>Total: {total}</p>
    </>
  );
}

export default App;
