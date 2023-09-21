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
import banner from '../../assets/banner.jpg'
import CardFull from '../../components/cardFull/CardFull'
import coracao from '../../assets/coracao.jpeg'
import mama from '../../assets/mama.jpeg'
import pele from '../../assets/pele.jpg'
import glaucoma from '../../assets/glaucoma.jpg'

const theme = createTheme({
  palette: {
    mode: 'light',
  },
})

export default function Catalogue() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={mainStyle}>
        <Header />
        <Box sx={bannerStyle}>
          <img src={banner} alt="Banner Medico utilizando Tecnologias" />

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
                  sm: 'flex',
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
          <Typography variant="h3" sx={titleStyle}>
            Analises
          </Typography>
          <Box
            sx={{
              display: 'flex',
              width: '80%',
              justifyContent: 'space-evenly',
            }}
          >
            <CardFull thumb={coracao} />
            <CardFull thumb={pele} />
            <CardFull thumb={mama} />
            <CardFull thumb={glaucoma} />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
