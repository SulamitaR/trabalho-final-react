import './Notificacao.css'

const Notificacao = (props) => {
    return (
        Notification.open({
            title: props.titulo,
            description: props.mensagem
          })
    ) 
}

export default Notificacao;