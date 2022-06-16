import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//import logo from "../logo.svg";
import img from "../img.png";
import { ButtonContainer } from "./Button";
export default class Navbar extends Component {
  render() {
    return (
      
      <Nav className="navbar navbar-dark  justify-content-between">
       
        <Link to="/">
          <img src={img} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item mr-sm-2">
            <Link to="/" className="nav-link">
              <h1>products</h1>
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className=" my-2 my-sm-0">
              <i className="fas fa-cart-plus " />
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </Nav>
    );
  }
}

const Nav = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`;