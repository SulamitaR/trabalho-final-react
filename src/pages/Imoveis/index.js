import "./index.css"

const Imoveis = () => {

    const imoveis = [
        {
            codigo:"ONE2024",
            descricao: "CASA 3 DORMITÓRIOS",
            tipo: "CASA",
            valor: "R$ 670.000",
            bairro: "BAIRRO ALBUQUERQUE",
            foto:""
        },
        {
            codigo:"ONE2025",
            descricao: "CASA 2 DORMITÓRIOS",
            tipo: "CASA",
            valor: "R$ 370.000",
            bairro: "OLARIA",
            foto:""
        },
        {
            codigo:"ONE2026",
            descricao: "CASA 4 DORMITÓRIOS",
            tipo: "CASA",
            valor: "R$ 1.200.000,00",
            bairro: "40 CASAS",
            foto:""
        },
        {
            codigo:"ONE2020",
            descricao: " APARTAMENTO 1 DORMITÓRIO",
            tipo: "APARTAMENTO",
            valor: "R$ 2.300",
            bairro: " BAIRRO QUITANDINHA",
            foto:""
        },
        {
            codigo:"ONE2021",
            descricao: " APARTAMENTO  2 SUÍTES",
            tipo: "APARTAMENTO",
            valor: "R$8.000",
            bairro: " ALTO",
            foto:""
        },
        {
            codigo:"ONE2022",
            descricao: " APARTAMENTO 3 DORMITÓRIOS",
            tipo: "APARTAMENTO",
            valor: "R$R$ 5.000",
            bairro: " VÁRZEA",
            foto:""
        },
        {
            codigo:"ONE2023",
            descricao: " APARTAMENTO 1 DORMITÓRIO",
            tipo: "APARTAMENTO",
            valor: "R$R$ 1.000",
            bairro: " VÁRZEA",
            foto: "https://pic.le-cdn.com/thumbs/520x390/08/1/properties/Property-97d947d3d72d5b87080eda9ea7b60b8f-118636745.jpg"
        },
        {
            codigo:"ONE2027",
            descricao: " SALA COMERCIAL/ 55mt",
            tipo: "LOJA",
            valor: "R$R$ 2.500",
            bairro: "  CENTRO/ PETRÓPOLIS",
            foto:""
        },

        {
            codigo:"ONE2028",
            descricao: "CASA COMERCIAL/165mt ",
            tipo: "CASA",
            valor: "R$R$ 4.800",
            bairro: " VENDA NOVA / TERESÓPOLIS",
            foto:""
        },

        {
            codigo:"ONE2029",
            descricao: "SALA COMERCIAL/ 40mt",
            tipo: "CLOJA",
            valor: "R$R$ 2.000",
            bairro: " VÁRZEA/ TERESÓPOLIS",
            foto:""
        },



    ];



    return (
        <div className="row">
            {
                imoveis.map(imovel => (
                    <div className="card col-sm-3">
                        <div className="imagem-card">
                            <img className="img-card" src={imovel.foto}/>
                        </div>
                        <p>{imovel.descricao}</p>
                        <h2>{imovel.valor}</h2>
                        
                    </div>
                ))
            }
        </div>
    )
}

export default Imoveis;