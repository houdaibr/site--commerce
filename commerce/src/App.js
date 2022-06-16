import React, { Component } from 'react';
import { Routes ,Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar';
import Details from './Component/Details';
import ProductList from './Component/Productlist';
import Product from './Component/Product'; 
import Default from './Component/Notfound';
import Cart from './Component/Cart/';
import Modal from './Component/Modal';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<ProductList/>} />
          <Route path="/details" element={<Details/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route element={<Default/>} />
        </Routes>
        <Modal/>
      </React.Fragment>
    );

  }
  
}

export default App;