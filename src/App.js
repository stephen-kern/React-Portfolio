import React, { useState } from "react";
import ContactForm from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import About from "./components/About";
import Resume from "./components/Resume";
import Header from "./components/Header";

function App() {
  const [currentNavLink, handleNavChange] = useState("about");

  const displayNavLink = () => {
    if (currentNavLink === "About") {
      return <About />;
    }
    if (currentNavLink === "Contact") {
      return <ContactForm />;
    }
    if (currentNavLink === "Projects") {
      return <Projects />;
    }
    if (currentNavLink === "Resume") {
      return <Resume />;
    }
  };

  return (
    <div>
      <Header currentNavLink={currentNavLink} handleNavChange={handleNavChange} />
      <main>{displayNavLink()}</main>
      <Footer />
    </div>
  );
}

export default App;
