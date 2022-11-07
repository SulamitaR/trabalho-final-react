import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto'
import CampoData from '../CampoData'
import './FormularioAtualizacaoCliente.css'

const FormularioAtualizacaoCliente = (props) => {

    const [id, setId] = useState('');  
    const [nome, setNome] = useState('');  
    const [usuario, setUsuario] = useState(''); 
    const [cpf, setCpf] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [nascimento, setNascimento] = useState('');  
    const [cep, setCep] = useState(''); 

    const aoSalvar = (evento) => { 
        evento.preventDefault() 

        props.clienteAtualizar(
            {  
                id, 
                nome,
                usuario,
                cpf,
                email,
                nascimento,
                cep
            },
        )

    }

    return (
        <section className='formularioAtualizacaoCliente'>
            <form onSubmit={aoSalvar}>  

                <h2>Atualização</h2>

                <CampoTexto 
                    obrigatorio={true} 
                    label="Id" 
                    placeholder="id" 
                    valor={id}
                    aoAlterado={valor => setId(valor)}
                />

                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />

                <CampoTexto 
                    obrigatorio={true} 
                    label="Usuário" 
                    placeholder="Usuário" 
                    value={usuario}
                    aoAlterado={valor => setUsuario(valor)}
                />

                <CampoTexto 
                    obrigatorio={true} 
                    label="CPF" 
                    placeholder="CPF" 
                    value={cpf}
                    aoAlterado={valor => setCpf(valor)}
                />

                <CampoTexto 
                    obrigatorio={true} 
                    label="Email" 
                    placeholder="Email" 
                    value={email}
                    aoAlterado={valor => setEmail(valor)}
                />

                <CampoData 
                    obrigatorio={true} 
                    label="Nascimento" 
                    placeholder="Nascimento" 
                    aoAlterado={valor => setNascimento(valor)}
                />  

                <CampoTexto 
                    obrigatorio={true} 
                    label="Cep" 
                    placeholder="cep" 
                    value={cep}
                    aoAlterado={valor => setCep(valor)}
                />
        
                <Botao>
                    Atualizar
                </Botao>

            </form>
        </section>
    )

}

export default FormularioAtualizacaoCliente;