import './index.css'

export const Cliente = ({nome, cpf, email}) => {
  return (

    <div className='cliente'>
        <h4>{nome}</h4>
        <h5>{cpf}</h5>
        <h5>{email}</h5>
    </div>

  )
};