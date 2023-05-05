import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./LoginScreen";
import Register from "./RegisterPage";
function Nothing() {
  return (
     
     <BrowserRouter>
     <Routes>
        <Route path ="/" element ={<LoginScreen/>}/>
       <Route path ="/register" element ={<Register/>}/> 
       </Routes>
     </BrowserRouter>
     
     
  );
}

export default Nothing;