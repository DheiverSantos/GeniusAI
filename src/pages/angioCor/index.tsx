import { useEffect, useState, useRef } from 'react'
import SendIcon from '@mui/icons-material/Send'
import DownloadIcon from '@mui/icons-material/Download'
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import { useNavigate } from 'react-router-dom'
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  Select,
  MenuItem,
  SelectChangeEvent,
  Button,
  Typography,
  Box,
} from '@mui/material'
import InputImg from '../../components/inputImg/InputImg'
import ResultScreen from '../../components/resultScreen/ResultScreen'
import getAnaliseApi from '../../API'
import Header from '../../components/header/Header'
import Intro from '../../components/Intro'
import Explication from '../../components/explication/Explication'
import {
  divAnaliseStyle,
  btnStyles,
  selectStyles,
  mainStyle,
  boxLeftStyle,
  boxRigthStyle,
} from './style'

const theme = createTheme({
  palette: {
    mode: 'light',
  },
})

type AnaliseType =
  | [
      { label: string },
      string,
      { label: string },
      { label: string },
      { label: string },
    ]
  | []

export default function Analise() {
  const [modelo, setModelo] = useState('SE-RegUNet 4GF')
  const [isResetImg, setIsResetImg] = useState(false)
  const [analise, setAnalise] = useState<AnaliseType>([])
  const [selectedImage, setSelectedImage] = useState<Blob | null>(null)
  const [isSend, setIsSend] = useState(false)
  const navigate = useNavigate()
  const downloadRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (localStorage.getItem('isAuthenticated') !== 'true') {
      navigate('/')
    }
  }, [navigate])

  useEffect(() => {
    setIsResetImg(false)
  }, [modelo])

  const handleChangeModelo = (e: SelectChangeEvent<string>) => {
    setModelo(e.target.value as string)
  }

  const handleSend = async () => {
    setIsResetImg(false)
    setIsSend(true)

    if (selectedImage) {
      const result = await getAnaliseApi(selectedImage, modelo)

      setAnalise(result)
    }

    setIsSend(false)
    setSelectedImage(null)
  }

  const handleReset = async () => {
    setIsResetImg(true)
    setAnalise([])
    setIsSend(false)
  }

  const handleDownload = () => {
    if (downloadRef.current && analise[1]) {
      if (typeof analise[1] === 'object') {
        const objectURL = URL.createObjectURL(analise[1])
        downloadRef.current.href = objectURL
        downloadRef.current.click()
        URL.revokeObjectURL(objectURL) // Limpeza para liberar memória
      } else {
        downloadRef.current.href = analise[1]
        downloadRef.current.click()
      }
    }
  }

  const modelosList = [
    'SE-RegUNet 4GF',
    'SE-RegUNet 16GF',
    'AngioNet',
    'EffUNet++ B5',
    'Reg-SA-UNet++',
    'UNet3+',
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
        <Intro />
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
              <Typography
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  color: '#001BA1',
                }}
              >
                Modelo:
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={modelo}
                  onChange={handleChangeModelo}
                  sx={selectStyles}
                >
                  {modelosList.map((modelo, index) => (
                    <MenuItem
                      key={index}
                      value={modelo}
                      sx={{ color: '#001BA1', fontSize: '12px' }}
                    >
                      {modelo}
                    </MenuItem>
                  ))}
                </Select>
              </Typography>

              <Button
                size="large"
                variant="contained"
                endIcon={<SendIcon />}
                onClick={handleSend}
                sx={btnStyles}
              >
                Enviar
              </Button>
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
              <Typography
                variant="body1"
                sx={{ color: '#001BA1' }}
              >{`Possui Doença: ${analise?.[2]?.label ?? ''}`}</Typography>

              <Button
                size="large"
                variant="outlined"
                endIcon={<DownloadIcon />}
                onClick={handleDownload}
                sx={btnStyles}
              >
                Baixar
              </Button>
            </Box>
            <ResultScreen
              isResetImg={isResetImg}
              urlImgAnalise={analise[1] ?? ''}
              isSend={isSend}
            />
            <Explication explicationAnalise={analise[3]?.label || ''} />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
