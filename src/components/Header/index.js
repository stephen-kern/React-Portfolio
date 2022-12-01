import React from "react";
import Nav from "../Nav";

function Header(props) {
    const {currentNavLink, handleNavChange} = props;

    return(
        <Nav currentNavLink={currentNavLink} handleNavChange={handleNavChange}> </Nav>
    )
}

export default Header;