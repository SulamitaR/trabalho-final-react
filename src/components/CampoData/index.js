import './CampoData.css' 

const CampoTexto = (props) => { 

    const aoDigitado = (evento) => { 
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto"> 

            <label>
                {props.label}  
            </label>     

            <input type="date" 
                value={props.valor} 
                onChange={aoDigitado} 
                required={props.obrigatorio} 
            /> 
        </div>
    )
}

export default CampoTexto;