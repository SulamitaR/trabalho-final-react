// 1° Importar quais as paginas que eu quero que ele cuide.
import Login from "./pages/Login";
import Imoveis from "./pages/Imoveis";
import Home from "./pages/Home";
import Quemsomos from "./pages/QuemSomos";
import Clientes from "./pages/Clientes";

import Header from "./components/Header"

// 2° Importar o React e tambem os componentes do React Router Dom.
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom"

const Router = () => (
    
    // Serve para informar que estou trabalhando com rotas no navegador
    <BrowserRouter>
    
        {/* O menu fica aqui para funcionar junto com o sistema de roteamento. */}
        <Header/>

        {/* é como se fosse um array, aqui vão ficar minhas rotas. */}
        <Routes>
            <Route exact path="/" element={<Home/>}/> 
            <Route path="/login" element={<Login/>}/> 
            <Route path="/imoveis" element={<Imoveis/>}/> 
            <Route path="/clientes" element={<Clientes/>}/> 
            <Route path="/quemSomos" element={<Quemsomos/>}/> 
        </Routes>
    </BrowserRouter>
);

export default Router;