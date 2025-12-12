import "./styles.css";
import invisible from "../../assets/images/invisible.png";

export default function Input({ placeholder, password, value, onChangeText }) {
    return (
        <div className="container">
            <input 
                type={password ? "password" : "text"} 
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChangeText && onChangeText(e.target.value)}
            />

            {password ? (
                <img src={invisible} className="password" alt="" />
            ) : (
                <img className="invisible" src={invisible} alt="" />
            )}
        </div>
    );
}
