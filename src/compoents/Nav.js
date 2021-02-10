import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathName } = useLocation();
  console.log(pathName);
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
          <Line
            variants={{ transition: { duration: "5" } }}
            initial={{ width: "0%" }}
            animate={{ width: pathName === "/" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
          <Line
            variants={{ transition: { duration: "5" } }}
            initial={{ width: "0%" }}
            animate={{ width: pathName === "/work" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact">3. Contact Us</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 3;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-family: "Lobster", cursive;
    font-size: 1.8rem;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  width: 50%;
  background: #23d997;
  position: absolute;
  bottom: -10px;
`;

export default Nav;
