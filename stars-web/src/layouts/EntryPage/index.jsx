import logo from "../../assets/images/logo-two.png"
import planets from "../../assets/images/planets.png"
import entry from "../../assets/images/enter.png"
import Button from "../../components/button/Button"
import Input from "../../components/Input/input"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { RegisterVeiculo } from "../../../../api"
import './styles.css'

export default function EntryPage() {
    const navigate = useNavigate();
    const [placa, setPlaca] = useState("");

    const agora = new Date();
    const dataHora = agora.toLocaleString("pt-BR");

    const handleRegister = async (e) => {
        e.preventDefault();

        console.log("handleRegister iniciado");

        const cadastro = await RegisterVeiculo(placa, dataHora);
        console.log("valor retornado:", cadastro);

        if (cadastro) {
            alert("Veículo cadastrado!");
            setPlaca("");
            navigate("/list"); 
        } else {
            alert("Erro: não foi possível cadastrar");
        }
    };

    return (
        <>
            <div className="container-entry">
                <header>
                    <Link to={'/'}><img src={logo} alt="" /></Link>
                    <nav className="entry-nav">
                        <Link to={'/entry'}>Entrada</Link>
                        <Link to={'/list'}>Lista de Veículo</Link>
                        <Link to={'/exit'}>Saída</Link>
                    </nav>
                    <img src={planets} className="img-planets" alt="" />
                </header>
                <section className="form-entry">
                    <article className="container-title">
                        <img src={entry} alt="" />
                        <h2>Entrada</h2>
                    </article>
                    <form onSubmit={handleRegister} action="">
                        <Input value={placa} onChangeText={setPlaca} placeholder={"Placa do Veículo"} />
                        <Button onClick={handleRegister} label={"Entrar"} color={"#595758"} />
                    </form>
                </section>
            </div>
        </>
    )
}
