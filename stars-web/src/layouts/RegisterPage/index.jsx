import logo from "../../assets/images/logo.png"
import planets from "../../assets/images/planets.png"
import back from "../../assets/images/back.png"
import Button from "../../components/button/Button"
import Input from "../../components/Input/input"
import './styles.css'
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { registerUser } from "../../../../api"

export default function RegisterPage() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        console.log("handleRegister iniciado");
        console.log("Dados:", { email, name, password });

        // Verificar campos
        if (!name || !email || !password) {
            alert("Preencha todos os campos antes de continuar.");
            return;
        }

        // Validar email
        if (!email.includes("@gmail.com") || email.startsWith("@")) {
            alert("Digite um e-mail Gmail válido, como exemplo@gmail.com");
            return;
        }

        // Registrar usuário
        const user = await registerUser(email, name, password);
        console.log("user retornado:", user);

        if (user) {
            alert(`Usuário ${user.name} cadastrado com sucesso!`);
            setName("");
            setEmail("");
            setPassword("");
            navigate("/list");
        } else {
            alert("Erro: Não foi possível cadastrar.");
        }
    };

    return (
        <div>
            <main>
                <Link to={'/'} className="link"><img src={back} alt="" className="img-back" /></Link>
                <section className="container-register">
                    <img src={planets} alt="" className="planets-img" />
                    <img src={logo} alt="" />
                    <form onSubmit={(e) => e.preventDefault()} action="">
                        <Input value={name} onChangeText={setName} placeholder={"Nome"} />
                        <Input value={email} onChangeText={setEmail} placeholder={"E-mail"} />
                        <Input value={password} onChangeText={setPassword} placeholder={"Senha"} password={true} />
                    </form>
                    <footer className="footer-register">
                        <Button onClick={handleRegister} label={"Criar"} color={"#FF92C2"} />
                    </footer>
                </section>
            </main>
        </div>
    )
}