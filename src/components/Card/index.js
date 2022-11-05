import { CardStyled, CabecalhoStyled, RodapeStyled } from './styles'
// Isso é um componente
function Card(props){

    return ( // JSX
        <CardStyled >
            <CabecalhoStyled>
                <img src={props.imagem} alt={`Foto do ${props.nome}`}></img>
            </CabecalhoStyled>
          <h1>{props.nome}</h1>
          <p>{props.subtitulo}</p>
          <RodapeStyled />
        </CardStyled>
    );
}

export default Card;