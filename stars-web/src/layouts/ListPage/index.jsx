import logo from "../../assets/images/logo-two.png"
import exit from "../../assets/images/logout.png"
import planets from "../../assets/images/planets.png"
import Button from "../../components/button/Button"
import Card from "../../components/Card/Card"
import Input from "../../components/Input/input"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { fetchCars } from "../../../api"
import './styles.css'

export default function ListPage() {
    const [veiculos, setVeiculos] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchVeiculos = async () => {
        try {
            setLoading(true);
            const data = await fetchCars();
            setVeiculos(data || []);
        } catch (error) {
            console.log("Erro ao buscar veículos:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchVeiculos();
    }, []);
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
                <table>
                    <thead>
                        <tr>
                            <th>Lista de Veículo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td>Carregando...</td>
                            </tr>
                        ) : veiculos.length > 0 ? (
                            veiculos.map((v) => (
                                <tr key={v.id}>
                                    <td>
                                        <Card
                                            placa={v.placa}
                                            data={v.dt_entrada}
                                        />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td>Nenhum veículo encontrado.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}