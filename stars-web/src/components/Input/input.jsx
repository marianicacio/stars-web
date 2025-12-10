import "./styles.css"
import invisible from "../../assets/images/invisible.png"

export default function Input({ placeholder, password }) {
    return (
        <form action="">
            <div className="container">
                <input type="text" placeholder={placeholder}/>
                {
                    password ? (
                        <img src={invisible} className="password" alt="" />
                    ) : (
                        <img className="invisible" src={invisible} alt="" />
                    )
                }
            </div>
        </form>
    )
}