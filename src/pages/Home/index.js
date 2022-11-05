import "./index.css"
import maisEspacoImg from "../../assets/img/mais-espaco.png";
import mobiliadoLocacaoImg from "../../assets/img/mobiliados_locacao.png";
import aceitaPetsImg from "../../assets/img/aceita_pets.png";
import aluguelSemFiadorImg from "../../assets/img/aluguel_sem_fiador.png";
import petropolisImg from "../../assets/img/petropolis.jpg";
import teresopolisImg from "../../assets/img/Teresopolis.jpg";
import friburgoImg from "../../assets/img/Friburgo.png";

const Home= () => {

    return (
        <center>
              <h1>SEJA BEM VINDO A SERRA IMOVEIS</h1>
              <h3>Aqui você fica por dentro das melhores opções de imovéis disponíveis na região serrana do estado do Rio de Janeiro.</h3>

              <div class="informacoes-imoveis-imagens">
                <div>
                    <img src={maisEspacoImg}></img>
                    <h2>Mais espaço para a família</h2>
                    <p>Se é varanda e áreas comuns que você procura, veja essa seleção de apartamentos e casas à venda.</p>
                </div>

                <div>
                    <img src={mobiliadoLocacaoImg}></img>
                    <h2>Mobiliados para locação</h2>
                    <p>imóveis mobiliados para alugarNão quer gastar com móveis agora? Veja os melhores . Pronto para entrar e morar.</p>
                </div>

                <div>
                    <img src={aceitaPetsImg}></img>
                    <h2>Aceita pets</h2>
                    <p>Seus peludos junto com você. Encontre as melhores ofertas de aluguel de imóveis para você e seu pet.</p>
                </div>

                <div>
                    <img src={aluguelSemFiadorImg}></img>
                    <h2>Aluguel sem fiador</h2>
                    <p>Alugar o imóvel dos sonhos nunca foi tão fácil! Encontre os melhores imóveis para alugar.</p>
                </div>

              </div>
        </center>
    )
}

export default Home;