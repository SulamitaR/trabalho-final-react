import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto'
import './FormularioExclusao.css'

const FormularioExlusao = (props) => {

    const [id, setId] = useState('');  

    const aoSalvar = (evento) => { 
        evento.preventDefault() 
                                   
        props.excluir = (
            {
                id: id
            }
        );
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>  

                <h2>Solicitação de exclusão</h2>

                <CampoTexto 
                    obrigatorio={true} 
                    label="Id" 
                    placeholder="Informe o id." 
                    valor={id}
                    aoAlterado={valor => setId(valor)}
                />
        
                <Botao>
                    Excluir
                </Botao>

            </form>
        </section>
    )

}

export default FormularioExlusao;