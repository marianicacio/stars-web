import './styles.css'
import { Link } from "react-router-dom";


export default function Button({ label, color, onClick, link }) {
    return (
        <Link to={link} style={{ textDecoration: "none" }}>
            <button onClick={onClick} style={{ backgroundColor: color }}>
                <p className='label-button'>{label}</p>
            </button>
        </Link>
    )
}