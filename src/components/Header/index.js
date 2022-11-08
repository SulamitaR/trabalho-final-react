import "./index.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {

    if(useLocation().pathname === "/login"){
        return (<></>);
    }

    return (
        <ul>
            <li><Link to={'/'} >Home</Link></li>
            <li><Link to={'/imoveis'} >Imoveis</Link></li>
            <li><Link to={'/clientes'} >Clientes</Link></li>
            <li><Link to={'/quemsomos'}>Quem somos</Link></li>
            <li><Link to={'/Login'}>Login</Link></li>
            <li><Link to={'/indique'}>Indicar imóveis</Link></li>
            
            
        </ul>
    )
}

export default Header;