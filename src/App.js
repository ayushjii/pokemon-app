import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutpokemon from "./Components/Aboutpokemon";
import All from "./Components/AllPokemon";

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<All />} />
          <Route exact path="/pokemon/:name" element={<Aboutpokemon />} />
          <Route exact path="/pokemon/" element={<Aboutpokemon />} />
        </Routes>
    </Router>
  );
}

export default App;