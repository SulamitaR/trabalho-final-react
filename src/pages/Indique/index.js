import "./index.css"
import Button from "../../components/Button"


const Indique = () => {

    const indicar = () => {
       window.open("/criar-conta", "_self");
    };

    return (
        <div className="row">
            <div className="col-sm-7 centralizar-texto">  
                <h1>Ganhe dinheiro indicando imóveis para alugar ou vender</h1>
                <p>Indique imóveis para a Serra imóveis e ganhe R$ 100 por imóvel publicado.</p>
                <p>Se o imóvel for alugado você ganha 10% do primeiro aluguel, se for vendido, você ganha R$ 1.000.</p>
                
                <Button valor="Quero indicar" executar={indicar}/>

            </div>

            <div className="col-sm-4">
                <img src="https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f3e0.png " />
            </div>


        </div>

    )
}

export default Indique;