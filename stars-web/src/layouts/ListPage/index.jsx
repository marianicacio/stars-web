import logo from "../../assets/images/logo-two.png"
import exit from "../../assets/images/logout.png"
import planets from "../../assets/images/planets.png"
import Button from "../../components/button/Button"
import Card from "../../components/Card/Card"
import Input from "../../components/Input/input"
import { Link } from 'react-router-dom';
import './styles.css'

export default function ListPage() {
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
                <table>
                    <thead>
                        <tr>
                            <th>Lista de Veículo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <Card placa={"JKLIH-5F"} data={"27-08"} hora={"18:00"}/>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}