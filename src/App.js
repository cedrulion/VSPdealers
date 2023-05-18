import React from 'react';
import './index.css';
import SigninForm from './component/SigninForm';
import SignupForm from './component/Signup';
import ProductHeader from "./component/ProductHeader"
import Main from './component/Main'
import {Routes,Route} from "react-router-dom"

import About from './component/about';

import CartItem from './component/CartItem';
import AdminNav from './component/AdminNav';
import Dashboard from './component/Dashboard';
import AddProduct from './component/Addproduct';
import Client from './component/Client';
import OrderInfo from './component/OrderInfo';
import Homepage from './component/Homepage'

function App() {


  return (
       <>     
       <Routes>
        <Route exact path="/" element={<Main/>}></Route>
        <Route exact path="/Main" element={<Main/>}></Route>
        <Route exact path="/Homepage" element={<Homepage/>}></Route>
        <Route exact path="/signup" element={<SignupForm/>}></Route>
        <Route exact path="/login" element={<SigninForm/>}></Route>
        <Route exact path="/product" element={<ProductHeader/>}></Route>
        <Route exact path="/OrderInfo" element={<OrderInfo/>} ></Route>
        <Route exact path="/about" element={<About/>}></Route>
        <Route exact path="/cartitem" element={<CartItem/>}></Route>
       
      
       
      
       
        
        <Route exact path="/AdminNav" element={<AdminNav/>}> 

          
        <Route exact path="Dashboard" element={<Dashboard/>}/>
          <Route exact path="AddProduct" element={<AddProduct/>}/>
         
          <Route exact path="Client" element={<Client/>}/>
       
          </Route>
      
       
       </Routes> 
      </>
  );
}

export default App;
