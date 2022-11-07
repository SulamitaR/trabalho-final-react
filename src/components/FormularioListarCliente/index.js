import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto'
import './FormularioListarCliente.css'

const FormularioListarCliente = (props) => {

    const [id, setId] = useState('');  

    const aoSalvar = (evento) => { 
        evento.preventDefault() 
                                   
        props.localizar(id);

    }

    return (
        <section className='formularioListarCliente'>
            <form onSubmit={aoSalvar}>  

                <h2>Busca</h2>

                <CampoTexto 
                    obrigatorio={true} 
                    label="Id" 
                    placeholder="Informe o id" 
                    valor={id}
                    aoAlterado={valor => setId(valor)}
                />
        
                <Botao>
                    Localizar
                </Botao>

            </form>
        </section>
    )

}

export default FormularioListarCliente;