import Botao from '../Botao';
import './FormularioListarClientes.css'

const FormularioListarClientes = (props) => {

    const aoSalvar = (evento) => { 
        evento.preventDefault() 

        props.exibe(true)
    }

    return (
        <section className='formularioListarClientes'>
            <form onSubmit={aoSalvar}>  

                <h2>Clientes</h2>
        
                <Botao>
                    Exibir
                </Botao>

            </form>
        </section>
    )

}

export default FormularioListarClientes;