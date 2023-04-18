import React from "react";
import { createRoot } from "react-dom/client";
import LeafCounter from "./LeafCounter";
import EdgeCounter from "./EdgeCounter";
import EquivalentChecker from "./EquivalentChecker";
import { exampleStructure } from "./data_structures/example_structure";

const App = () => {
  return (
    <div className="App">
      <LeafCounter dataStructure={exampleStructure} />
      <EdgeCounter dataStructure={exampleStructure} />
      <EquivalentChecker dataStructure={exampleStructure} />
    </div>
  );
};

const rootDiv = document.getElementById("root");
if (rootDiv) {
  createRoot(rootDiv).render(<App />);
}
