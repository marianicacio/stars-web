import logo from "../../assets/images/logo-two.png"
import exit from "../../assets/images/logout.png"
import planets from "../../assets/images/planets.png"
import Button from "../../components/button/Button"
import Input from "../../components/Input/input"
import { Link } from 'react-router-dom';
import './styles.css'

export default function ExitPage() {
    return (
        <>
            <div className="container-entry">
                <header>
                    <Link to={'/'}><img src={logo} alt="" /></Link>
                    <nav className="entry-nav">
                        <Link to={'/entry'}><a href="">Entrada</a></Link>
                        <Link to={'/list'}><a href="">Lista de Veículo</a></Link>
                        <Link to={'/exit'}><a href="">Saída</a></Link>
                    </nav>
                <img src={planets} className="img-planets" alt="" />
                </header>
                <section className="form-entry">
                    <article className="container-title">
                        <img src={exit} alt="" />
                        <h2>Saída</h2>
                    </article>
                    <form action="">
                        <Input placeholder={"Placa do Veículo"} />
                        <Button label={"Saída"} color={"#595758"} />
                    </form>
                </section>
            </div>
        </>
    )
}
