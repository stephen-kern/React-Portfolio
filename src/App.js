import React, { useState } from "react";
import Nav from "./components/Nav";
import ContactForm from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const [navLinks] = useState([
    { name: "Portfolio" }, { name: "Resume"}
  ])

  const [currentNavLink, setCurrentNavLink] = useState(navLinks[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        navLinks={navLinks}
        setCurrentNavLink={setCurrentNavLink}
        currentNavLink={currentNavLink}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        <div>
          {!contactSelected ? (
            <>
            <Projects currentNavLink={currentNavLink}></Projects>
            <Footer currentNavLink={currentNavLink}></Footer>
            </>
          ) : (
            <ContactForm></ContactForm>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
