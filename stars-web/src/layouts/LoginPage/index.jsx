import logo from "../../assets/images/logo.png"
import planets from "../../assets/images/planets.png"
import Button from "../../components/button/Button"
import Input from "../../components/Input/input"
import { Link } from 'react-router-dom';
import './styles.css'

export default function LoginPage() {
    
    return (
        <div>
            <main>
                <section className="container-login">
                    <img src={planets} alt="" className="planets-img" />
                    <img src={logo} alt="" />
                    <form action="">
                        <Input placeholder={"E-mail"} value={email} onChangeText={setEmail}/>
                        <Input placeholder={"Senha"} password={true} value={password} onChangeText={setPassword}/>
                    </form>
                    <footer className="footer-login">
                        <Button onPress={handleLogin} link={'/list'} label={"Entrar"} color={"#FF92C2"} />
                        <p className="p-footer">Não tem login! <Link to={'/register'}><a href="">Cadastre-se</a></Link></p>
                    </footer>
                </section>
            </main>
        </div>
    )
}