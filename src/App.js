import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import All from "./Components/AllPokemon";
import {Aboutpokemon} from "./Components/Aboutpokemon";

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<All />} />
          <Route exact path="/pokemon/:name" element={<Aboutpokemon />} />
        </Routes>
    </Router>
  );
}

export default App;