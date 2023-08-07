import { useEffect, useState } from 'react'
import SendIcon from '@mui/icons-material/Send'
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
} from '@mui/material'
import InputImg from '../../components/inputImg/InputImg'
import Discription from '../../components/discription/Discription'

const theme = createTheme({
  palette: {
    mode: 'light',
  },
})

export default function Analise() {
  const [metodo, setMetodo] = useState('')
  const [isResetImg, setIsResetImg] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('isAuthenticated') !== 'true') {
      navigate('/')
    }
  }, [navigate])

  const handleChangeMetodo = (e: SelectChangeEvent<string>) => {
    setMetodo(e.target.value as string)
  }

  const metodosList = [
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
            padding: '1.125rem',
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
                margin: 1,
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
                Metodo:
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={metodo}
                  label="metodo"
                  onChange={handleChangeMetodo}
                  sx={{ width: '12.5rem', height: '2.5rem' }}
                >
                  {metodosList.map((metodo, index) => (
                    <MenuItem key={index} value={metodo}>
                      {metodo}
                    </MenuItem>
                  ))}
                </Select>
              </InputLabel>

              <Button
                size="large"
                variant="contained"
                endIcon={<SendIcon />}
                sx={{ width: '9.375rem', height: '2.5rem' }}
              >
                Enviar
              </Button>
              <Button
                size="large"
                variant="outlined"
                endIcon={<RestartAltIcon />}
                onClick={() => setIsResetImg(true)}
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
                margin: 1,
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
                Metodo:
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={metodo}
                  label="metodo"
                  onChange={handleChangeMetodo}
                  sx={{ width: '12.5rem', height: '2.5rem' }}
                >
                  {metodosList.map((metodo, index) => (
                    <MenuItem key={index} value={metodo}>
                      {metodo}
                    </MenuItem>
                  ))}
                </Select>
              </InputLabel>

              <Button
                size="large"
                variant="contained"
                endIcon={<SendIcon />}
                sx={{ width: '12.5rem', height: '2.5rem' }}
              >
                Enviar
              </Button>
              {isResetImg && <h1>Reset</h1>}
            </Box>
            <InputImg />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
