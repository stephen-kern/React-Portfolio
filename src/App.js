import React from "react";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import About from "./pages/About";
import Header from "./components/Header";

function App() {
  return (
    <div className="app scroll-container">
      <Header />
      <About />
      <Projects />
      <Footer /> 
    </div>
  );
}

export default App;
