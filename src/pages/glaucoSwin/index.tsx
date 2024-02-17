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
import { ImgListEx } from '../../components/ImgListEx/ImgListEx.tsx'
import imgExTest01 from '../../assets/glaucoswin_thumb.jpg'
import { formatLabel } from '../../utils/formatLabels.ts'

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

  const exampleImageList = [
    { img: imgExTest01, title: 'Exemplo 1' },
    { img: imgExTest01, title: 'Exemplo 2' },
    { img: imgExTest01, title: 'Exemplo 3' },
  ]

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
        <ImgListEx
          imageList={exampleImageList}
          setSelectedImage={setSelectedImage}
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
              selectedImageBlob={selectedImage}
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
                  {analise.length === 0
                    ? ['Glaucoma', 'Non-glaucoma'].map((label, index) => (
                        <Box key={index} sx={{ width: '100%' }}>
                          <Typography>{label}: </Typography>
                          <LinearProgress variant="determinate" value={0} />
                        </Box>
                      ))
                    : analise.map((item, index) => (
                        <Box key={index} sx={{ width: '100%' }}>
                          <Typography>{`${formatLabel(item.label)}: ${
                            item.score
                              ? `${Math.round(item.score * 1000) / 10}%`
                              : ''
                          }`}</Typography>
                          <LinearProgress
                            variant="determinate"
                            value={
                              item.score
                                ? Math.round(item.score * 1000) / 10
                                : 0
                            }
                          />
                        </Box>
                      ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
