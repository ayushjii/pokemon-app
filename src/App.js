import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import All from "./Components/AllPokemon";

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<All />} />
          <Route exact path="/:name" element={<All />} />
        </Routes>
    </Router>
  );
}

export default App;