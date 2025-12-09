import "./styles.css"
import invisible from "../../assets/images/invisible.png"

export default function Input({ placeholder, password }) {
    return (
        <form action="">
            <input type="text" placeholder={placeholder}/>
            {
                password ? (
                    <img src={invisible} alt="" />
                ) : (
                    <img className="password" src={invisible} alt="" />
                )
            }
        </form>
    )
}