import "./index.css"
const QuemSomos = () => {

    return (
        <center>
            <h1>Quem somos </h1>

            <body>
                <p>O Serratec – Parque Tecnológico da Região Serrana é uma instituição privada, sem fins lucrativos e de interesse público.</p>
                <p> Principal indutor de negócios em TI do interior do estado do Rio de Janeiro, o
                    Serratec é também o maior Parque Tecnológico do interior fluminense, abrangendo as cidades de Petrópolis, Teresópolis, Nova Friburgo e Areal.</p>
                <p> E Nele tem o melhor site de compra/venda e para alugueis de imóveis da Região serrana</p>

                {/* Sulamita Rodrigues Card */}

                <div className="col-12 col-md-6 col-lg-4 card-3">
                    <div className="card text-center">
                        <div className="card-body">
                            <img src="https://avatars.githubusercontent.com/u/111604686?v=4" alt="foto de perfil"
                                className="img-fluid rounded-circle" />
                            <h3 className="card-title py-2" >Sulamita Rodrigues</h3>
                            <p className="card-text">
                                Teresópolis - RJ
                            </p>

                        </div>
                    </div>
                </div>


                {/* Richard Cardinot Card */}

                <div className="col-12 col-md-6 col-lg-4 card-3">
                    <div className="card text-center">
                        <div className="card-body">
                            <img src="https://avatars.githubusercontent.com/u/73504375?v=4" alt="foto de perfil"
                                className="img-fluid rounded-circle" />
                            <h3 className="card-title py-2" >Richard Cardinot</h3>
                            <p className="card-text">
                                Teresópolis - RJ
                            </p>
                        </div>
                    </div>
                </div>

                {/* Márcia Lima Card */}

                <div className="col-12 col-md-6 col-lg-4 card-3">
                    <div className="card text-center">
                        <div className="card-body">
                            <img src="https://avatars.githubusercontent.com/u/100387127?v=4" alt="foto de perfil"
                                className="img-fluid rounded-circle" />
                            <h3 className="card-title py-2" >Marcia Lima</h3>
                            <p className="card-text">
                                Nova Friburgo - RJ
                            </p>
                        </div>
                    </div>
                </div>
                {/* Gabriel Pacheco Card */}

                <div className="col-12 col-md-6 col-lg-4 card-3">
                    <div className="card text-center">
                        <div className="card-body">
                            <img src="https://avatars.githubusercontent.com/u/112281707?v=4" alt="foto de perfil"
                                className="img-fluid rounded-circle" />
                            <h3 className="card-title py-2" >Gabriel Pacheco</h3>
                            <p className="card-text">
                                Nova Friburgo - RJ
                            </p>
                        </div>
                    </div>
                </div>

                {/* Gabriel Mendes Card */}

                <div className="col-12 col-md-6 col-lg-4 card-3">
                    <div className="card text-center">
                        <div className="card-body">
                            <img src="https://avatars.githubusercontent.com/u/98937422?v=4" alt="foto de perfil"
                                className="img-fluid rounded-circle" />
                            <h3 className="card-title py-2" >Gabriel Mendes</h3>
                            <p className="card-text">
                                Teresópolis - RJ
                            </p>
                        </div>
                    </div>
                </div>

                {/* Pedro Veiga Card */}

                <div className="col-12 col-md-6 col-lg-4 card-3">
                    <div className="card text-center">
                        <div className="card-body">
                            <img src="https://avatars.githubusercontent.com/u/112408095?v=4" alt="foto de perfil"
                                className="img-fluid rounded-circle" />
                            <h3 className="card-title py-2" >Pedro Veiga</h3>
                            <p className="card-text">
                                Nova Friburgo - RJ
                            </p>
                        </div>
                    </div>
                </div>




                <div className="social">
                    <a href="https://pt-br.facebook.com/serratecoficial/" target="_blank"><i
                        className="bi bi-facebook"></i></a>
                    <a href="https://www.instagram.com/serratecoficial/" target="_blank"><i
                        className="bi bi-instagram"></i></a>
                    <a href="https://www.linkedin.com/company/serratecoficial/" target="_blank"><i
                        className="bi bi-linkedin"></i></a>
                    <a href="https://www.youtube.com/channel/UC2pvxl7H3IK2X6z9XZ3xsyQ" target="_blank"><i
                        className="bi bi-youtube"></i></a>
                    <a href="https://github.com/Material-Didatico-Serratec" target="_blank"><i
                        className="bi bi-github"></i></a>
                </div>



            </body>

        </center >
    )
}

export default QuemSomos;