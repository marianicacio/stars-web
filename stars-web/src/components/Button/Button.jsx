import './styles.css'

export default function Button({label, color, onPress}) {
    return (
        <button onPress={onPress} style={{backgroundColor: color}}>
            <p>{label}</p>
        </button>
    )
}