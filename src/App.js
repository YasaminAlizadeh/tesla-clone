import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="App">
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Header openMenu={setIsMenuOpen} />
      <Home />
    </div>
  );
}

export default App;
