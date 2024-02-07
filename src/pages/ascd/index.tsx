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
import InputImg from '../../components/inputImg/InputImg.tsx'
import Header from '../../components/header/Header.tsx'
import Intro from '../../components/Intro/index.tsx'
import {
  divAnaliseStyle,
  btnStyles,
  mainStyle,
  boxLeftStyle,
  boxRigthStyle,
  boxResultStyles,
} from '../../StyleGlobal.ts'
import getApi from '../../API/getASCD.ts'
import { modelsInfo } from '../../utils/modelsInfo.ts'

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

export default function ASCD() {
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
          titleModel={`${modelsInfo[3].alias} - ${modelsInfo[3].fullname}`}
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
                Enviar
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
                  <Typography>{`Melanocytic-nevi: ${
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
                  <Typography>{`Melanoma: ${
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
                <Box sx={{ width: '100%' }}>
                  <Typography>{`Benign-keratosis-like-lesi: ${
                    analise.length > 0 && analise[2]?.score
                      ? `${Math.round(analise[2]?.score * 1000) / 10}%`
                      : ''
                  }`}</Typography>
                  <LinearProgress
                    variant="determinate"
                    value={
                      analise.length > 0 && analise[2]?.score
                        ? Math.round(analise[2]?.score * 1000) / 10
                        : 0
                    }
                  />
                </Box>
                <Box sx={{ width: '100%' }}>
                  <Typography>{`Basal-cell-carcinoma: ${
                    analise.length > 0 && analise[3]?.score
                      ? `${Math.round(analise[3]?.score * 1000) / 10}%`
                      : ''
                  }`}</Typography>
                  <LinearProgress
                    variant="determinate"
                    value={
                      analise.length > 0 && analise[3]?.score
                        ? Math.round(analise[3]?.score * 1000) / 10
                        : 0
                    }
                  />
                </Box>
                <Box sx={{ width: '100%' }}>
                  <Typography>{`Actinic-keratoses: ${
                    analise.length > 0 && analise[4]?.score
                      ? `${Math.round(analise[4]?.score * 1000) / 10}%`
                      : ''
                  }`}</Typography>
                  <LinearProgress
                    variant="determinate"
                    value={
                      analise.length > 0 && analise[4]?.score
                        ? Math.round(analise[4]?.score * 1000) / 10
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
