import { useEffect, useState } from 'react'
import Doctor from '../../assets/doctor-picture.webp'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { useNavigate } from 'react-router-dom'
import './style.css'

function Hero() {
  const navigate = useNavigate()
  const [goUp, setGoUp] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBookAppointmentClick = () => {
    navigate('/appointment')
  }

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true)
      } else {
        setGoUp(false)
      }
    }
    window.addEventListener('scroll', onPageScroll)

    return () => {
      window.removeEventListener('scroll', onPageScroll)
    }
  }, [])

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">Genius AI</p>
          <h2 className="text-title">
            Inovando a Interpretação de Exames de Imagens
          </h2>
          <p className="text-descritpion">
            Nossas ferramentas baseadas em IA oferecem suporte decisivo no
            diagnóstico, tornando-se um recurso indispensável no arsenal médico
            moderno.
          </p>
          {/* <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          ></button> */}
          <div className="text-stats">
            <div className="text-stats-container">
              <p>98%</p>
              <p>Precisão</p>
            </div>

            <div className="text-stats-container">
              <p>10+</p>
              <p>Especialidade médicas</p>
            </div>

            <div className="text-stats-container">
              <p>30+</p>
              <p>Modelos de IA</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Doctor" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? 'show-scroll' : ''}`}
      >
        <KeyboardArrowUpIcon />
      </div>
    </div>
  )
}

export default Hero
