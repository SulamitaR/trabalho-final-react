

import Imoveis from "./pages/Imoveis";
import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";
import Clientes from "./pages/Clientes";
import Indique from "./pages/Indique";
import CriarConta from "./pages/CriarConta";
import Login from "./pages/Login/login";


import Header from "./components/Header"


import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom"

const Router = () => (
    
    
    <BrowserRouter>
    
        <Header/>
        
        <div className="container">
            <Routes>
                <Route exact path="/" element={<Home/>}/> 
                <Route path="/imoveis" element={<Imoveis/>}/> 
                <Route path="/login" element={<Login/>}/> 
                <Route path="/clientes" element={<Clientes/>}/> 
                <Route path="/quemSomos" element={<QuemSomos/>}/> 
                <Route path="/indique" element={<Indique/>}/> 
                <Route path="/criar-conta" element={<CriarConta/>}/> 
                
            </Routes>
        </div>
        
    </BrowserRouter>
);

export default Router;