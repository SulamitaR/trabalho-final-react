import "./style.js"
import Api from "../../Api";
import { Cliente } from "../../components/Cliente";
import { useState } from "react";
import { useEffect } from "react";
import { ClienteStyled } from "./style.js";
import FormularioCadastroCliente from "../../components/FormularioCadastroCliente/index";
import FormularioExclusao from "../../components/FormularioExclusao/index";

const Clientes = () => {
    const [clientes, setClientes] = useState([]);

    useEffect (() => {

       const obterClientes = async () => {
         try {
           const response = await Api.get("/cliente");
           setClientes(response.data);
         } catch (error) {
           console.log(error);
         }
       };
       obterClientes();
       }, []);
    

      const cadastrarCliente = async (clienteCadastrar) => {
        try {
          const response = await Api.post("/cliente", clienteCadastrar);
          setClientes([...clientes, clienteCadastrar.data])
        } catch (error) {
          console.log(error);
        }
      };

      const excluirCliente = async (clienteExcluir) => {
        try {
          const response = await Api.delete(`/cliente/${clienteExcluir.id}`);
          let id = clienteExcluir.id;
        } catch (error) {
        }
      };


    return (
        
        <div>
            <FormularioCadastroCliente clienteCadastrado={clienteCadastrar => cadastrarCliente(clienteCadastrar)} />
            <FormularioExclusao excluir={clienteExcluir => excluirCliente(clienteExcluir)} />
            
              <ClienteStyled>
                
                {clientes.map(cliente => <Cliente key={cliente.id} nome={cliente.nome} cpf={cliente.cpf} email={cliente.email} />)}
              </ClienteStyled>
        </div>
    )
}

export default Clientes;