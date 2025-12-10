import logo from "../../assets/images/logo-two.png"
import exit from "../../assets/images/logout.png"
import planets from "../../assets/images/planets.png"
import entry from "../../assets/images/enter.png"
import Button from "../../components/button/Button"
import Input from "../../components/Input/input"
import './styles.css'

export default function ExitPage() {
    return (
        <>
            <div className="container-entry">
                <header>
                    <img src={logo} alt="" />
                    <nav className="entry-nav">
                        <a href="">Entrada</a>
                        <a href="">Lista de Veículo</a>
                        <a href="">Saída</a>
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
