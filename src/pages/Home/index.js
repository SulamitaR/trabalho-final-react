import "./index.css";
import maisEspacoImg from "../../assets/img/mais-espaco.png";
import mobiliadoLocacaoImg from "../../assets/img/mobiliados_locacao.png";
import aluguelSemFiadorImg from "../../assets/img/aluguel_sem_fiador.png";

const Home = () => {

    return (
        <center>
            <div class="container-principal" id="container">
                <h1 class="titulo-principal">SEJA BEM-VINDO A SERRA IMOVEIS</h1>
                <h3 class="subtitulo-principal">Aqui você fica por dentro das melhores opções de imovéis disponíveis na região serrana do estado do Rio de Janeiro.</h3>
            </div>

            <div class="container container-informacoes">
                <div class="row grid">
                <div class="col-md">
                <div class="card">
                    <h3>Ambientes espaçosos</h3>
                    <div class="card-header">
                        <img src={maisEspacoImg} width="100%" alt=""></img>
                    </div>
                    <div class="card-body">Se é varanda e áreas comuns que você procura, veja essa seleção de apartamentos e casas à venda.</div> 
                    </div>
                </div>
                
                <div class="col-md">
                <div class="card">
                        <h3>Mobiliados para locação</h3>
                    <div class="card-header">
                        <img src={mobiliadoLocacaoImg} width="100%" alt=""></img>
                    </div>
                    <div class="card-body">Não quer gastar com móveis agora? Veja os melhores imóveis mobiliados para locação.</div> 
                    </div>
                </div>
                
                <div class="col-md">
                <div class="card">
                    <h3>Aluguel sem fiador</h3>
                    <div class="card-header">
                        <img src={aluguelSemFiadorImg} width="100%" alt=""></img>
                    </div>
                    <div class="card-body">Alugar o imóvel dos sonhos nunca foi tão fácil! Encontre os melhores imóveis para alugar.</div> 
                    </div>
                </div>
            </div>
            </div>

            <hr></hr>
        </center>
    )
}

export default Home;