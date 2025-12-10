import logo from "../../assets/images/logo.png"
import planets from "../../assets/images/planets.png"
import back from "../../assets/images/back.png"
import Button from "../../components/button/Button"
import Input from "../../components/Input/input"
import './styles.css'
export default function RegisterPage() {
    return (
        <div>
            <main>
                <img src={back} alt="" className="img-back" />
                <section className="container-register">
                    <img src={planets} alt="" className="planets-img" />
                    <img src={logo} alt="" />
                    <form action="">
                        <Input placeholder={"Nome"} />
                        <Input placeholder={"E-mail"} />
                        <Input placeholder={"Senha"} password={true} />
                    </form>
                    <footer className="footer-register">
                        <Button label={"Criar"} color={"#FF92C2"} />
                    </footer>
                </section>
            </main>
        </div>
    )
}