import { useEffect, useState, useRef } from 'react'
import SendIcon from '@mui/icons-material/Send'
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import { useNavigate } from 'react-router-dom'
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  Button,
  Typography,
  Box,
  LinearProgress,
} from '@mui/material'
import InputImg from '../../components/inputImg/InputImg'
import Header from '../../components/header/Header'
import Intro from '../../components/Intro'
import {
  divAnaliseStyle,
  btnStyles,
  mainStyle,
  boxLeftStyle,
  boxRigthStyle,
  boxResultStyles,
} from '../../styles/StyleGlobal.ts'
import getApi from '../../API/getGlaucoSwin'
import { modelsInfo } from '../../utils/modelsInfo'
import { wakeUpApi } from '../../utils/wakeUpApi.ts'

const theme = createTheme({
  palette: {
    mode: 'light',
  },
})

interface ClassificationResult {
  score: number
  label: string
}

type AnaliseType = ClassificationResult[] | []

export default function GlaucoSwin() {
  const [isResetImg, setIsResetImg] = useState(false)
  const [analise, setAnalise] = useState<AnaliseType>([])
  const [selectedImage, setSelectedImage] = useState<Blob | null>(null)
  const navigate = useNavigate()
  const downloadRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (localStorage.getItem('isAuthenticated') !== 'true') {
      navigate('/')
    }
  }, [navigate])

  useEffect(() => {
    wakeUpApi(getApi)
  }, [])

  const handleSend = async () => {
    setAnalise([])
    setIsResetImg(false)

    if (selectedImage) {
      const result = await getApi(selectedImage)

      setAnalise(result as AnaliseType)
    }

    setSelectedImage(null)
  }

  const handleReset = async () => {
    setIsResetImg(true)
    setAnalise([])
    setTimeout(() => setIsResetImg(false), 0)
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
          titleModel={`${modelsInfo[1].alias} - ${modelsInfo[1].fullname}`}
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
            <Box sx={boxResultStyles}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '80%',
                  height: '50%',
                  justifyContent: 'space-evenly',
                }}
              >
                <Box sx={{ width: '100%' }}>
                  <Typography>{`Glaucoma: ${
                    analise.length > 0 && analise[0]?.score
                      ? `${Math.round(analise[0]?.score * 1000) / 10}%`
                      : ''
                  }`}</Typography>
                  <LinearProgress
                    variant="determinate"
                    value={
                      analise.length > 0 && analise[0]?.score
                        ? Math.round(analise[0]?.score * 1000) / 10
                        : 0
                    }
                  />
                </Box>
                <Box sx={{ width: '100%' }}>
                  <Typography>{`Non-glaucoma: ${
                    analise.length > 0 && analise[1]?.score
                      ? `${Math.round(analise[1]?.score * 1000) / 10}%`
                      : ''
                  }`}</Typography>
                  <LinearProgress
                    variant="determinate"
                    value={
                      analise.length > 0 && analise[1]?.score
                        ? Math.round(analise[1]?.score * 1000) / 10
                        : 0
                    }
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
