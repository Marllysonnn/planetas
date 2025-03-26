import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Mercurio from "./components/planetas/mercurio";
import Venus from "./components/planetas/venus";
import Terra from "./components/planetas/terra";
import Marte from "./components/planetas/marte";
import Jupiter from "./components/planetas/jupiter";
import Saturno from "./components/planetas/saturno";
import Urano from "./components/planetas/urano";
import Netuno from "./components/planetas/netuno";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/terra" element={<Terra />} />
        <Route path="/venus" element={<Venus />} />
        <Route path="/mercurio" element={<Mercurio />} />
        <Route path="/jupiter" element={<Jupiter />} />
        <Route path="/saturno" element={<Saturno />} />
        <Route path="/marte" element={<Marte />} />
        <Route path="/netuno" element={<Netuno />} />
        <Route path="/urano" element={<Urano />} />
      </Routes>
    </div>
  );
}

export default App;
