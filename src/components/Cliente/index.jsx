import './index.css'

export const Cliente = ({nome, id, cpf, email}) => {
  return (

    <div className='cliente'>
        <h4>{nome}</h4>
        <h5>Id: {id}</h5>
        <h5>CPF: {cpf}</h5>
        <h5>Email: {email}</h5>
    </div>
  )
};