import { useState } from "react";

function App(){
  const [color, setColor] = useState("red");

  return(
    <>
      <h1>My favourite color is {color}!</h1>
      
      <button
        type='button'
        onClick={() => setColor("blue")}
      >blue
      </button>

      <button
        type='button'      
        onClick={() => setColor("red")}
      >red      
      </button>

      <button
        type='button'
        onClick={() => setColor("yellow")}
      >yellow        
      </button>
    </>
  );
}

export default App;
