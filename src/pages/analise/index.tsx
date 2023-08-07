import { useEffect, useState } from 'react'
import SendIcon from '@mui/icons-material/Send'
import DownloadIcon from '@mui/icons-material/Download'
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import { useNavigate } from 'react-router-dom'
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  Box,
  Select,
  MenuItem,
  InputLabel,
  SelectChangeEvent,
  Button,
  Typography,
} from '@mui/material'
import InputImg from '../../components/inputImg/InputImg'
import Discription from '../../components/discription/Discription'
import ResultScreen from '../../components/resultScreen/ResultScreen'
/* import { apiGradio } from '../../API/api'
import axios from 'axios' */

const theme = createTheme({
  palette: {
    mode: 'light',
  },
})

export default function Analise() {
  const [modelo, setModelo] = useState('SE-RegUNet 4GF')
  const [isResetImg, setIsResetImg] = useState(false)
  const [urlImgAnalise, setUrlImgAnalise] = useState('')
  const navigate = useNavigate()

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
    console.log('enviarrrr' + modelo)
    setIsResetImg(false)
    const link =
      'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/09/c3/33/97.jpg' // subistituir por logica para API retornar img da analise
    setUrlImgAnalise(link)
  }

  const handleReset = async () => {
    console.log('reset')
    setIsResetImg(true)
    setUrlImgAnalise('')
  }

  const handleDownload = async () => {
    console.log('baixarrr' + ' ' + urlImgAnalise)
    const downloadLink = document.createElement('a')

    downloadLink.href = urlImgAnalise
    downloadLink.download = 'image.png'
    downloadLink.click()
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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '1.125rem',
          border: '0.0625rem solid red',
          width: '100%',
          height: '100%',
        }}
      >
        <Discription />
        <Box
          sx={{
            display: 'flex',
            padding: '15px',
            border: '0.0625rem solid black',
            width: '95%',
            height: '62.5rem',
            justifyContent: 'space-evenly',
            gap: '0.625rem',
          }}
        >
          <Box>
            {/* Side left */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-end',
                margin: '.5rem',
                justifyContent: 'space-between',
              }}
            >
              <InputLabel
                id="demo-simple-select-label"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                Modelo:
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={modelo}
                  label="modelo"
                  onChange={handleChangeModelo}
                  sx={{ width: '12.5rem', height: '2.5rem' }}
                >
                  {modelosList.map((modelo, index) => (
                    <MenuItem key={index} value={modelo}>
                      {modelo}
                    </MenuItem>
                  ))}
                </Select>
              </InputLabel>

              <Button
                size="large"
                variant="contained"
                endIcon={<SendIcon />}
                onClick={handleSend}
                sx={{ width: '9.375rem', height: '2.5rem' }}
              >
                Enviar
              </Button>
              <Button
                size="large"
                variant="outlined"
                endIcon={<RestartAltIcon />}
                onClick={handleReset}
                sx={{ width: '9.375rem', height: '2.5rem' }}
              >
                Limpar
              </Button>
            </Box>
            <InputImg isResetImg={isResetImg} />
          </Box>
          <Box>
            {/* Side rigth */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-end',
                marginTop: '1.875rem',
                marginBottom: '.5rem',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="h6">Status:</Typography>

              <Button
                size="large"
                variant="outlined"
                endIcon={<DownloadIcon />}
                onClick={handleDownload}
                sx={{ width: '9.375rem', height: '2.5rem' }}
              >
                Baixar
              </Button>
            </Box>
            <ResultScreen
              isResetImg={isResetImg}
              urlImgAnalise={urlImgAnalise}
            />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
