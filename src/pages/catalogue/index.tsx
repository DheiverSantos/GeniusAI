import {
  Box,
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
import Hero from '../../components/Hero/Hero'

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
        <Hero />
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
