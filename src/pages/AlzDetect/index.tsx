import { useEffect, useState, useRef } from 'react'
import SendIcon from '@mui/icons-material/Send'
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import { useNavigate } from 'react-router-dom'
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  Button,
  Box,
} from '@mui/material'
import InputImg from '../../components/inputImg/InputImg.tsx'
import Header from '../../components/header/Header.tsx'
import Intro from '../../components/Intro/index.tsx'
import {
  divAnaliseStyle,
  btnStyles,
  mainStyle,
  boxLeftStyle,
  boxRigthStyle,
} from '../../styles/StyleGlobal.ts'
import getApi from './api/api.ts'
import { modelsInfo } from '../../utils/modelsInfo.ts'
import Explication from '../../components/explication/Explication.tsx'

const theme = createTheme({
  palette: {
    mode: 'light',
  },
})

type AnaliseType = string | null

export default function AlzDetect() {
  const [isResetImg, setIsResetImg] = useState(false)
  const [analise, setAnalise] = useState<AnaliseType>(null)
  const [selectedImage, setSelectedImage] = useState<Blob | null>(null)
  const navigate = useNavigate()
  const downloadRef = useRef<HTMLAnchorElement>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('isAuthenticated') !== 'true') {
      navigate('/')
    }
  }, [navigate])

  const handleSend = async () => {
    setAnalise(null)
    setIsResetImg(false)
    setIsLoading(true)

    if (selectedImage) {
      const result = await getApi(selectedImage)
      console.log(result)
      setAnalise(result as AnaliseType)
    }

    setIsLoading(false)
    setSelectedImage(null)
  }

  const handleReset = async () => {
    setIsResetImg(true)
    setAnalise(null)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <a
        ref={downloadRef}
        style={{ display: 'none' }}
        download="result_image.jpg"
      ></a>{' '}
      <Box sx={mainStyle}>
        <Header />
        <Intro
          titleModel={`${modelsInfo[6].alias} - ${modelsInfo[6].fullname}`}
        />
        <Box sx={divAnaliseStyle}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* Side left */}
            <Box sx={boxLeftStyle}>
              <Button
                size="large"
                variant="contained"
                endIcon={<SendIcon />}
                onClick={handleSend}
                sx={btnStyles}
              >
                Analisar
              </Button>
            </Box>
            <InputImg
              isResetImg={isResetImg}
              setSelectedImage={setSelectedImage}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* Side rigth */}
            <Box sx={boxRigthStyle}>
              <Button
                size="large"
                variant="outlined"
                endIcon={<RestartAltIcon />}
                onClick={handleReset}
                sx={btnStyles}
              >
                Limpar
              </Button>
            </Box>
            <Explication
              explicationAnalise={analise || ''}
              isLoading={isLoading}
            />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
