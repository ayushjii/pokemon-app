import Favorite from "./Components/Favorites";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutpokemon from "./Components/Aboutpokemon";
import { Home } from "./Components/Home";
import War from "./Components/War";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/pokemon/" element={<Aboutpokemon />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/war" element={<War />} />
        <Route path="/pokemon/:name" element={<Aboutpokemon />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
