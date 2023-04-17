import React from "react";
import { createRoot } from "react-dom/client";
import LeafCounter from "./LeafCounter";
import EdgeCounter from "./EdgeCounter";

const App = () => {
  return (
    <div className="App">
      <LeafCounter/>
      <EdgeCounter/>
    </div>
  );
};

const rootDiv = document.getElementById("root");
if (rootDiv) {
  createRoot(rootDiv).render(<App />);
}
