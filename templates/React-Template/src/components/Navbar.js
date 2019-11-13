import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 60px;
  background: rgba(100, 100, 100, 0.35);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  padding: 1rem 2rem;
  height: 60px;
  outline: 0;

  :hover {
    background: rgba(0, 0, 0, 0.15);
  }

  :active {
    background: rgba(0, 0, 0, 0.35);
  }

  :focus {
    background: rgba(0, 0, 0, 0.2);
  }
`;

/**
 * This is only a simple sample of creating a Navbar.
 * The entire project is more of a template than anything.
 */
function Navbar() {
  return (
    <StyledNavbar>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">About</StyledLink>
    </StyledNavbar>
  );
}

export default Navbar;
