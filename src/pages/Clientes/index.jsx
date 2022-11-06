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
import FormularioListarCliente from "../../components/FormularioListarCliente/index";
import FormularioListarClientes from "../../components/FormularioListarClientes/index";

const Clientes = () => {
    const [clientes, setClientes] = useState([]);
    const [cliente, setCliente] = useState([]);
    const [listarClientes, setlistarClientes] = useState([]);

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

        let exibe = false
        const exibirClientes = async (exibe) => {
          if(exibe !== true) {
            exibe = false
          }
  
          if(exibirClientes) {
            try {
              const response = await Api.get("/cliente");
              setCliente([])
              setlistarClientes(response.data);
            } catch (error) {
              console.log(error);
            }
          }
        };

        const localizarCliente = (id) => {
          let clienteLocalizado = clientes.filter(cliente => cliente.id == id);
          setlistarClientes([])
          setCliente(clienteLocalizado)
        };

        console.log(cliente)

    return (
        
        <div>
          <FormStyled>
            <FormularioCadastroCliente clienteCadastrado={cadastrarCliente} />
            <FormularioAtualizacaoCliente clienteAtualizar={atualizarCliente} />
            <FormularioExclusao excluir={excluirCliente} />
            <FormularioListarCliente localizar={localizarCliente} />
            <FormularioListarClientes exibe={exibirClientes} />
          </FormStyled>   
            
              <ClienteStyled>
              {cliente.map(cliente => <Cliente key={cliente.id} nome={cliente.nome} id={cliente.id} cpf={cliente.cpf} email={cliente.email} />)}
              {listarClientes.map(cliente => <Cliente key={cliente.id} nome={cliente.nome} id={cliente.id} cpf={cliente.cpf} email={cliente.email} />)}
              </ClienteStyled>
        </div>
    )
}

export default Clientes;