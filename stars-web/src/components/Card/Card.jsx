import './styles.css'

export default function Card({placa, hora, data}) {
    return (
        <section className='container-card'>
            <h1>{placa}</h1>
            <div>
                <p>{data}</p>
                <p>{hora}</p>
            </div>
        </section>
    )
}