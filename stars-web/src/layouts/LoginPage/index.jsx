import logo from "../../assets/images/logo.png"
import planets from "../../assets/images/planets.png"
import Button from "../../components/button/Button"
import Input from "../../components/Input/input"
import './styles.css'

export default function LoginPage() {
    return (
        <div>
            <main>
                <section className="container-login">
                    <img src={planets} alt="" className="planets-img" />
                    <img src={logo} alt="" />
                    <form action="">
                        <Input placeholder={"E-mail"} />
                        <Input placeholder={"Senha"} password={true} />
                    </form>
                    <footer className="footer-login">
                        <Button label={"Entrar"} color={"#FF92C2"} />
                        <p className="p-footer">Não tem login! <a href="">Cadastre-se</a></p>
                    </footer>
                </section>
            </main>
        </div>
    )
}