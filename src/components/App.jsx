import React from "react";
import { createRoot } from "react-dom/client";
import LeafCounter from "./LeafCounter";

const App = () => {
  return (
    <div className="App">
      <LeafCounter/>
    </div>
  );
};

const rootDiv = document.getElementById("root");
if (rootDiv) {
  createRoot(rootDiv).render(<App />);
}
