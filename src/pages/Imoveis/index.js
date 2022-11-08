import { useEffect } from "react";
import { useState } from "react";
import Api from "../../Api";
import "./index.css"
import Button from "../../components/Button";
import utilDinheiro from "../../utils/dinheiro";


const Imoveis = () => {
    const [imoveis, setImoveis] = useState([]);

    useEffect(() => {

        const getDados = async () => {
            try {
                const response = await Api.get("/produto");
                setImoveis(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        getDados();

    }, []);

   
const adquirir = () => {
        alert("Aqui irá direcionar a tela de comprar/alugar");
    }

    return (
        <div className="row">
            {



                imoveis.map(imovel => (
                    <div key={imovel.id} className="card col-sm-3">
                        <div className="imagem-card">
                            <img className="img-card" src={imovel.imagem} />
                        </div>
                        <p>Código: {imovel.id}</p>
                        <h5>Descricao: {imovel.descricao}</h5>
                        <p>Valor: {utilDinheiro.converterParaReal(imovel.valor)}</p>
                        <p>Cidade:{imovel.cidade}</p>
                        <p>Bairro: {imovel.bairro}</p>
                        
                        <Button valor="Adquirir" executar={adquirir} />

                    </div>
                ))
            }
        </div>
    )
}

export default Imoveis;