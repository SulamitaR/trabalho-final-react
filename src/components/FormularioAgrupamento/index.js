import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto'
import CampoData from '../CampoData'
import './FormularioAgrupamento.css'

const FormularioAgrupamento = (props) => {

    return (
        <section className='formularioAtualizacaoCliente'>
            <div>{props.children}</div>
        </section>
    )

}

export default FormularioAgrupamento;