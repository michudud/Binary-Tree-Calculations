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

  const parsedStructure = JSON.stringify(currDataStructure)
    .replace(/,/g, ",\n")
    .replace(/\[/g, "[\n")
    .replace(/\]/g, "]\n");

  return (
    <div className="App">
      <div className="App_Content">
        <LeafCounter dataStructure={currDataStructure} />
        <EdgeCounter dataStructure={currDataStructure} />
        <EquivalentChecker dataStructure={currDataStructure} />
        <button className="App_Button" onClick={handleClick}>
          Check the Structure Below
        </button>
        <textarea
          className="App_Textarea"
          ref={textAreaRef}
          defaultValue={parsedStructure}
        ></textarea>
      </div>
    </div>
  );
};

const rootDiv = document.getElementById("root");
if (rootDiv) {
  createRoot(rootDiv).render(<App />);
}
