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
import { ResultScreenWithImage } from '../../components/ResultScreenWithImage/ResultScreenWithImage'
import getApi from '../../API/getAngioCor'
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
import { modelsInfo } from '../../DB/modelsInfo'
import { wakeUpApi } from '../../utils/wakeUpApi'
import imgExTest01 from '../../assets/angiocor_thumb.jpeg'
import { ImgListEx } from '../../components/ImgListEx/ImgListEx'

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

export default function AngioCor() {
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
    wakeUpApi(getApi, 'SE-RegUNet 4GF')
  }, [])

  useEffect(() => {
    setIsResetImg(false)
  }, [modelo])

  const handleChangeModelo = (e: SelectChangeEvent<string>) => {
    setModelo(e.target.value as string)
  }

  const handleSend = async () => {
    setAnalise([])
    setIsResetImg(false)
    setIsSend(true)

    if (selectedImage) {
      const result = await getApi(selectedImage, modelo)

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

  const exampleImageList = [
    { img: imgExTest01, title: 'Exemplo 1' },
    { img: imgExTest01, title: 'Exemplo 2' },
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
        <Intro titleModel={`${modelsInfo[0].fullname}`} />
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
              <Typography
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  color: '#818196',
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
                      sx={{ fontSize: '12px' }}
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
                Analisar
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
              <Typography variant="body1">{`Anormalidade: ${
                analise?.[2]?.label ?? ''
              }`}</Typography>

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
            <ResultScreenWithImage
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
