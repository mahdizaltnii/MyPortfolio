import "./App.css";
import Header from "./components/Header";
import Home from "./page/Home";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
      </Routes>
    </>
  );
}

export default App;
