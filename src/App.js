import React from "react";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import About from "./pages/About";
import Nav from "./components/Nav";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="app">
      <Nav {...Modal} />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
