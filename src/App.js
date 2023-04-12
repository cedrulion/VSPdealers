import React from 'react';
import './App.css';
import SigninForm from './component/SigninForm';
import SignupForm from './component/Signup';
import ProductHeader from "./component/ProductHeader"
import Main from './component/Main'
import {Routes,Route} from "react-router-dom"

function App() {
  return (
       <>     
       <Routes>
        <Route exact path="/" element={<Main/>}></Route>
        <Route exact path="/signup" element={<SignupForm/>}></Route>
        <Route exact path="/login" element={<SigninForm/>}></Route>
        <Route exact path="/product" elemnt={<ProductHeader/>}></Route>
       </Routes>
      
      </>
  );
}

export default App;
