import Botao from '../Botao';
import './FormularioListarClientes.css'

const FormularioListarClientes = (props) => {

    const aoSalvar = (evento) => { 
        evento.preventDefault() 

        props.exibe(true)
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>  

                <h2>Exibir clientes</h2>
        
                <Botao>
                    Exibir
                </Botao>

            </form>
        </section>
    )

}

export default FormularioListarClientes;