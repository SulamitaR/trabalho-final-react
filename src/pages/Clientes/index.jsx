import "./style.js"
import Api from "../../Api";
import { Cliente } from "../../components/Cliente";
import { useState } from "react";
import { useEffect } from "react";
import { ClienteStyled } from "./style.js";
import { FormStyled } from "./style-form.js";
import FormularioCadastroCliente from "../../components/FormularioCadastroCliente/index";
import FormularioAtualizacaoCliente from "../../components/FormularioAtualizacaoCliente/index";
import FormularioExclusao from "../../components/FormularioExclusao/index";

const Clientes = () => {
    const [clientes, setClientes] = useState([]);

      const cadastrarCliente = async (clienteCadastrado) => {
        try {
          const response = await Api.post("/cliente", clienteCadastrado);
          setClientes([...clientes, clienteCadastrado.data])
        } catch (error) {
          console.log(error);
        }
      };


      const atualizarCliente = async (atualizarCliente) => {
        try {
          const response = await Api.put(`/cliente/${atualizarCliente.id}`, atualizarCliente);
        } catch (error) {
          console.log(error);
        }
      };

      const excluirCliente = async (id) => {
        try {
          const response = await Api.delete(`/cliente/${id}`);
        } catch (error) {
        }
      };

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


    return (
        
        <div>
          <FormStyled>
            <FormularioCadastroCliente clienteCadastrado={cadastrarCliente} />
            <FormularioAtualizacaoCliente clienteAtualizar={atualizarCliente} />
            <FormularioExclusao excluir={excluirCliente} />
          </FormStyled>   
            
              <ClienteStyled>
              {/* clientes.map(cliente => <Cliente key={cliente.id} nome={cliente.nome} cpf={cliente.cpf} email={cliente.email} />) */}
              </ClienteStyled>
        </div>
    )
}

export default Clientes;