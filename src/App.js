import React, { useState } from "react";
import Nav from "./components/Nav";
import ContactForm from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import About from "./components/About";

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
      // return < />;
    }
  };

  return (
    <div>
      <Nav currentNavLink={currentNavLink} handleNavChange={handleNavChange} />
      <main>{displayNavLink()}</main>
      <Footer />
    </div>
  );
}

export default App;
