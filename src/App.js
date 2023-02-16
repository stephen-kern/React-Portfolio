import React, { useState } from "react";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import About from "./pages/About";
import Header from "./components/Header";

function App() {
  // const [currentNavLink, handleNavChange] = useState("about");

  // const displayNavLink = () => {
  //   if (currentNavLink === "About") {
  //     return <About />;
  //   }
  //   if (currentNavLink === "Projects") {
  //     return <Projects />;
  //   }
  //   if (currentNavLink === "Resume") {
  //     return <Resume />;
  //   }
  // };

  return (
    <div className="app scroll-container">
      {/* <Header
        currentNavLink={currentNavLink}
        handleNavChange={handleNavChange}
      />
      <main>{displayNavLink()}
      </main>
      <Footer /> */}
      <Header />
      <About />
      <Projects />
      <Footer /> 
    </div>
  );
}

export default App;
