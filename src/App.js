import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutpokemon from "./Components/Aboutpokemon";
import All from "./Components/AllPokemon";
import InfiniteSpace from "./Components/Test";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/test" element={<InfiniteSpace />} />
          <Route path="/pokemon/" element={<Aboutpokemon />} />
          <Route path="/pokemon/:name" element={<Aboutpokemon />} />
        </Routes>
    </Router>
  );
}

export default App;