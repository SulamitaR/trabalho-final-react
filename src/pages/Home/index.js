import "./index.css";
import maisEspacoImg from "../../assets/img/mais-espaco.png";
import mobiliadoLocacaoImg from "../../assets/img/mobiliados_locacao.png";
import aluguelSemFiadorImg from "../../assets/img/aluguel_sem_fiador.png";
import joaoImg from "../../assets/img/joao.jpg";
import yanImg from "../../assets/img/yan.jpg";
import deboraImg from "../../assets/img/poo.jpg";
import webersonImg from "../../assets/img/weberson.jpg";




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

            <section id="testimonials">

            <div id="testimonial-carousel" class="carousel slide" data-ride="false">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <h2>"Melhores corretores do mercado, agilidade, seriedade e compromisso."</h2>
                        <img class="testimonial-image" src={joaoImg}></img>
                        <em>João Felipe</em>
                    </div>

                    <div class="carousel-item">
                        <h2 class="testimonial-text">"Qualidade, agilidade e profissionalismo em sistemas imobiliários, eu indico e destaco o melhor custo benefício do mercado! Sempre com novas atualizações e estou com a SERRA IMÓVEIS a mais de 14 anos."</h2>


                        <img class="testimonial-image" src={deboraImg}></img>
                        <em>Débora Souza</em>
                    </div>
                    <div class="carousel-item">
                        <h2 class="testimonial-text">"Parabéns SERRA IMÓVEIS, vocês são EXEMPLO de OTIMA empresa prestadora de serviço. Empresa feita por gente. Quero agradecer ao serviço prestado por vocês, eficiente e ágil."</h2>


                        <img class="testimonial-image" src={yanImg}></img>
                        <em>Yan Tedesco</em>
                    </div>

                    <div class="carousel-item">
                        <h2 class="testimonial-text">"Super indico os serviços da SERRA IMÓVEIS, conseguiram "automagicamente" o imóvel que eu precisava."</h2>
                        <img class="testimonial-image" src={webersonImg}></img>
                        <em>Weberson Rodrigues</em>
                    </div>
                </div>

                <a class="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Anterior</span>
                </a>

                <a class="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Próximo</span>
                </a>
            </div>

        </section><hr></hr>


        <footer class="rodape">
            Direitos reservados a Serratec. Feito com o &#128154;
            
        </footer>
        </center>
    )
}

export default Home;