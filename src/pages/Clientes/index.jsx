import "./style.js"
import Api from "../../Api";
import { Cliente } from "../../components/Cliente";
import { useState } from "react";
import { useEffect } from "react";
import { ClientesStyled, ClienteStyled } from "./style.js";

const Clientes = () => {
    const [clientes, setClientes] = useState([]);

    useEffect (() => {

       const getDados = async () => {
         try {
           const response = await Api.get("/cliente");
           setClientes(response.data);
         } catch (error) {
           console.log(error);
         }
       };
       getDados();
   
       }, []);

       console.log(clientes);

    return (
        
        <ClientesStyled>
          <h1>Página de clientes</h1>
              <ClienteStyled>
                {clientes.map(cliente => <Cliente key={cliente.id} nome={cliente.nome} cpf={cliente.cpf} email={cliente.email} />)}
              </ClienteStyled>
        </ClientesStyled>
    )
}

export default Clientes;