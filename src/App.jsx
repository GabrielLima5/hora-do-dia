import { useState, useEffect } from 'react'
import Container from './components/container/Container'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'

function App(props) {

    const [hour, setHour] = useState(new Date().getHours())
    const [minute, setMinute] = useState(new Date().getMinutes())

    let bodyBg = null
    let h1Color = null
    let footerColor = null
    let image = null

    if (hour >= 6 && hour <= 12){
      bodyBg = 'lightYellow'
      h1Color = 'black'
      footerColor = 'black'
      image = require('./images/morning.jpg')
    } else if (hour >= 13 && hour <= 18){
      bodyBg = 'darkYellow'
      image = require('./images/afternoon.jpg')
    } else {
      bodyBg = 'gray'
      image = require('./images/night.jpg')
    }

    function getHour(){
      const hourTime = hour < 10 ? `0${hour}` : hour
      return hourTime
    }
    
    function getMinutes(){
      const minuteTime = minute < 10 ? `0${minute}` : minute
      return minuteTime
    }

    useEffect(() => {
      setInterval(() => {
        window.location.reload(true)
      }, 60000)
    }, [])

    return (
      <Container background={bodyBg}>
        <Header color={h1Color} title="Hora do Dia"></Header>
        <Main 
          hours={getHour()} 
          minutes={getMinutes()}
          image={image}></Main>
        <Footer color={footerColor} title="®Curso em Vídeo"></Footer>
      </Container>
    );
}

export default App;
