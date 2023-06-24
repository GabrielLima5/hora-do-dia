import './Main.css'

export default function Main(props){

    return(
        <main>
            <div className="container">
                <div className="text">
                    <p>Agora são</p>
                    <div className="time">
                        <p className="hours">{props.hours}</p>
                        <p>:</p>
                        <p className="minutes">{props.minutes}</p>
                    </div>
                </div>

                <div className="image">
                    <img src={props.image} alt='Imagem Dia ou Noite' />
                </div>
            </div>
        </main>
    )
}