import {
  Box,
  Button,
  CssBaseline,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material'
import Header from '../../components/header/Header'
import {
  bannerStyle,
  bodyBanner,
  cardsSection,
  mainStyle,
  subTitleStyle,
  titleStyle,
  vidroStyle,
} from '../catalogue/style'
import bannerVideo from '../../assets/video.mp4'
import CardFull from '../../components/cardFull/CardFull'
import { modelsInfo } from '../../utils/modelsInfo'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from '../../components/carousel/Carousel'

const theme = createTheme({
  palette: {
    mode: 'light',
  },
})

export default function Catalogue() {
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('isAuthenticated') !== 'true') {
      navigate('/')
    }
  }, [navigate])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={mainStyle}>
        <Header />
        <Box sx={bannerStyle}>
          <video autoPlay loop muted playsInline>
            <source src={bannerVideo} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>

          <Box sx={vidroStyle} />

          <Box sx={bodyBanner}>
            <Typography variant="h3" sx={titleStyle}>
              Tecnologias de Ponta em Diagnósticos Médicos
            </Typography>
            <Typography sx={subTitleStyle}>
              Facilitamos diagnósticos médicos através de análise de imagens.
              Precisão, Eficiência e diversidade de Aplicações
            </Typography>
            <Box
              sx={{
                display: {
                  xs: 'none',
                  sm: 'none',
                  md: 'flex',
                },
                gap: 4,
              }}
            >
              <a
                href="https://api.whatsapp.com/send?phone=+5551989889898&text=Olá"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Button variant="contained" sx={{ background: '#001BA1' }}>
                  Contato
                </Button>
              </a>

              <a
                href="https://geniusai.art.br/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Button
                  variant="outlined"
                  sx={{ color: '#001BA1', borderColor: '#001BA1' }}
                >
                  Saiba Mais
                </Button>
              </a>
            </Box>
          </Box>
        </Box>
        <Box sx={cardsSection}>
          <Box
            sx={{
              display: 'flex',
              width: '80%',
              justifyContent: 'space-evenly',
              flexWrap: 'wrap',
              gap: 2,
            }}
          >
            {modelsInfo.map((model) => (
              <CardFull
                key={model.alias}
                modelsInfoProps={{
                  thumb: model.thumb,
                  alias: model.alias,
                  description: model.description,
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
