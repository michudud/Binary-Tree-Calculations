import React, { useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import LeafCounter from "./LeafCounter";
import EdgeCounter from "./EdgeCounter";
import EquivalentChecker from "./EquivalentChecker";
import { exampleStructure } from "./data_structures/example_structure";

const App = () => {
  const [currDataStructure, setCurrDataStructure] = useState(exampleStructure);
  const textAreaRef = useRef();
  const handleClick = () => {
    const structure = JSON.parse(textAreaRef.current.value);
    setCurrDataStructure(structure);
  };

  return (
    <div className="App">
      <LeafCounter dataStructure={currDataStructure} />
      <EdgeCounter dataStructure={currDataStructure} />
      <EquivalentChecker dataStructure={currDataStructure} />
      <button onClick={handleClick}>Check Structure</button>
      <textarea
        ref={textAreaRef}
        defaultValue={JSON.stringify(currDataStructure)}
      ></textarea>
    </div>
  );
};

const rootDiv = document.getElementById("root");
if (rootDiv) {
  createRoot(rootDiv).render(<App />);
}
