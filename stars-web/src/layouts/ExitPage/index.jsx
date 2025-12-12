import logo from "../../assets/images/logo-two.png"
import exit from "../../assets/images/logout.png"
import planets from "../../assets/images/planets.png"
import Button from "../../components/button/Button"
import Input from "../../components/Input/input"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { saidaVeiculo } from "../../../../api"
import './styles.css'

export default function ExitPage() {

    const navigate = useNavigate();
    const [placa, setPlaca] = useState("");

    const handleExit = async (e) => {
        e.preventDefault(); 

        const response = await saidaVeiculo(placa);

        if (response) {
            navigate("/list");
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
                        <img src={exit} alt="" />
                        <h2>Saída</h2>
                    </article>
                    <form onSubmit={handleExit} action="">
                        <Input onChangeText={setPlaca} placeholder={"Placa do Veículo"} />
                        <Button onClick={handleExit} label={"Saída"} color={"#595758"} />
                    </form>
                </section>
            </div>
        </>
    )
}
