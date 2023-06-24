import './Footer.css'

export default function Footer(props){
    return(
        <footer className={`footer
        ${props.color === 'black' ? 'black' : ''}`}>
            <i>{props.title}</i>
        </footer>
    )
}