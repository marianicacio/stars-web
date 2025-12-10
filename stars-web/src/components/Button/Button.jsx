import './styles.css'
import { Link } from "react-router-dom";


export default function Button({ label, color, onPress, link }) {
    return (
        <Link to={link} style={{ textDecoration: "none" }}>
            <button onPress={onPress} style={{ backgroundColor: color }}>
                <p className='label-button'>{label}</p>
            </button>
        </Link>
    )
}