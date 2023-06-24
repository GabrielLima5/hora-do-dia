import './Container.css'

export default function Container(props){
    return(
        <div className={`container-app
        ${props.background === 'lightYellow' ? 'light-yellow' : ''}
        ${props.background === 'darkYellow' ? 'dark-yellow' : ''}
        ${props.background === 'gray' ? 'gray' : ''}`}>
            {props.children}
        </div>
    )
}