import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const {
    navLinks = [],
    setCurrentNavLink,
    currentNavLink,
    contactSelected,
    setContactSelected,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentNavLink.name);
  }, [currentNavLink]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a href="/">Stephen Kern</a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a
              href="#about"
              onClick={() => setContactSelected(false)}
            >
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && "navActive"}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {navLinks.map((navLink) => (
            <li
              className={`mx-1 ${
                currentNavLink.name === navLink.name &&
                !contactSelected &&
                "navActive"
              }`}
              key={navLink.name}
            >
              <span
                onClick={() => {
                  setCurrentNavLink(navLink);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(navLink.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;