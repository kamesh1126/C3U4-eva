import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";



export const Navbar = () => {
  const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
 
  return (
    <>
      <nav >
        {/* keep all the NavLinks here */}
        <navLink to='/'>Home</navLink>
        <navLink to='/About'>About</navLink>
        <navLink to='/Books'>Books</navLink>
        <navLink to='/Login'>Login</navLink>
        
      </nav>
    </>
  );
};
