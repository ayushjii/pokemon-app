import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutpokemon from "./Components/Aboutpokemon";
import All from "./Components/AllPokemon";

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/pokemon/" element={<Aboutpokemon />} />
          <Route path="/pokemon/:name" element={<Aboutpokemon />} />
          <Route path="/" element={<All />} />
        </Routes>
    </Router>
  );
}

export default App;