import React from 'react';
import './App.css';
import Footer from './component/Footer';
import SigninForm from './component/SigninForm';
import SignupForm from './component/Signup';
import ProductHeader from './component/ProductHeader';
import Nav from './component/Nav'
import Main from './component/Main'
import {Routes,Route} from "react-router-dom"

function App() {
  return (
       <>
       <Nav/>
       <Routes>
        <Route exact path="/" element={<Main/>}></Route>
        <Route exact path="/signup" element={<SignupForm/>}></Route>
        <Route exact path="/login" element={<SigninForm/>}></Route>
       </Routes>
       <Footer/>
      
       
       {/* <SigninForm/> */}
       {/* <SignupForm/> */}
      {/* <Footer/> */}
      </>
  );
}

export default App;
