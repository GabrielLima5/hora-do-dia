import './Header.css'

export default function Header(props){
    return(
        <header>
            <h1 className={props.color === 'black' ? 'black' : ''}>{props.title}</h1>
        </header>
    )
}