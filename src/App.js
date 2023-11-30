import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./page/Home";
import BlogArchive from "./page/BlogArchive";

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
        <Route path="/" element={<Home darkMode={darkMode}   />} />
        <Route path="/blog" element={<BlogArchive />} />
      </Routes>

     
    </>
  );
}

export default App;
