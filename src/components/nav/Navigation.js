import React, { useEffect, useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdb-react-ui-kit";
import logo from "../asserts/mik-logo (1).png";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [navbarBg, setNavbarBg] = useState("transparent");

  

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const linkStyle = {
    fontFamily: "Poppins",
    fontSize: "13px",
    fontWeight: 500,
    lineHeight: "20.8px",
    color: "rgb(245, 247, 248)",
    transition: 'color 0.3s ease-in-out'
  };
  const hoverLinkStyle = {
    ...linkStyle,
    color: "#CBA557",
  };

  const handleMouseOver = (linkName) => {
    setHoveredLink(linkName);
  };

  const handleMouseOut = () => {
    setHoveredLink(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position and update the background color accordingly
      if (window.scrollY > 0) {
        setNavbarBg("#3B3D45");
      } else {
        setNavbarBg("transparent");
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <MDBNavbar
      expand="lg"
      className="navbar"
      style={{ backgroundColor: navbarBg, position: "fixed", width: "100vw", zIndex:2 }}
    >
      <MDBNavbarBrand style={{ justifyContent: "left", marginLeft: "100px" }}>
        <img src={logo} alt="Logo" style={{ width: "50px", height: "auto" }} />
      </MDBNavbarBrand>

      <MDBCollapse navbar show={showNav}>
        <MDBNavbarNav
          className="ms-auto"
          style={{ justifyContent: "right", marginRight: "100px" }}
        >
          <li className="nav-item">
            <a
              href="#home"
              className="nav-link"
              style={
                hoveredLink === "HOME" ? hoverLinkStyle : linkStyle
              }
              onMouseOver={() => handleMouseOver("HOME")}
              onMouseOut={handleMouseOut}
            >
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#about"
              className="nav-link"
              style={
                hoveredLink === "ABOUT US" ? hoverLinkStyle : linkStyle
              }
              onMouseOver={() => handleMouseOver("ABOUT US")}
              onMouseOut={handleMouseOut}
            >
              ABOUT US
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#expertise"
              className="nav-link"
              style={
                hoveredLink === "OUR EXPERTISE" ? hoverLinkStyle : linkStyle
              }
              onMouseOver={() => handleMouseOver("OUR EXPERTISE")}
              onMouseOut={handleMouseOut}
            >
              OUR EXPERTISE
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#team"
              className="nav-link"
              style={
                hoveredLink === "OUR TEAM" ? hoverLinkStyle : linkStyle
              }
              onMouseOver={() => handleMouseOver("OUR TEAM")}
              onMouseOut={handleMouseOut}
            >
              OUR TEAM
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#why"
              className="nav-link"
              style={
                hoveredLink === "WHY US?" ? hoverLinkStyle : linkStyle
              }
              onMouseOver={() => handleMouseOver("WHY US?")}
              onMouseOut={handleMouseOut}
            >
              WHY US?
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              className="nav-link"
              style={
                hoveredLink === "CONTACT US" ? hoverLinkStyle : linkStyle
              }
              onMouseOver={() => handleMouseOver("CONTACT US")}
              onMouseOut={handleMouseOut}
            >
              CONTACT US
            </a>
          </li>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default Navbar;
