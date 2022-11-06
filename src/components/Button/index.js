import './index.css';

const Button = (props) => {

    return (
        <button onClick={props.executar} type="button">{props.valor}</button>
    )
}

export default Button;