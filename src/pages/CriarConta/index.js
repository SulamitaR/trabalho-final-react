import "./index.css";
import Button from "../../components/Button"

const CriarConta = () => {
    const criarConta = () => {
        // Aqui tem que ir no backend criar a conta.
        alert("Aqui vamos criar a conta.")
    };

    return (
        <div className="col-sm-12 text-center tela-criar-conta">
            <h2>Acesse ou crie sua conta</h2>
            <p>Digite seu celular para entrar. Seus dados estão seguros e você não precisa de senha.</p>
            <center>


                <form className="form-criar-conta">
                    <div className="mb-3 mt-3">
                        <label for="nome" className="form-label">Nome:</label>
                        <input type="nome" className="form-control" id="nome" placeholder="Informe seu nome." />
                    </div>
                    <div className="mb-3 mt-3">
                        <label for="email" className="form-label">Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="Informe seu e-mail." />
                    </div>
                    <div className="mb-3">
                        <label for="telefone" className="form-label">Telefone</label>
                        <input type="text" className="form-control" id="telefone" placeholder="Informe seu telefone" />
                    </div>
                 
                    <Button executar={criarConta} valor="Salvar"/>
                </form>
            </center>
        </div>
    );
}

export default CriarConta;