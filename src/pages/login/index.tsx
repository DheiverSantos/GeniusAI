import { useNavigate } from 'react-router-dom'
import { validateLogin } from '../../auth/users'
import logo from '../../assets/logo.png'
import { useState, ChangeEvent, FormEvent } from 'react'
import GoogleIcon from '@mui/icons-material/Google'
import {
  Alert,
  Typography,
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  ThemeProvider,
  createTheme,
} from '@mui/material'
import { isLoginFormValid, isValidEmail } from '../../utils/validateFormLogin'

const theme = createTheme({
  palette: {
    mode: 'light',
  },
})

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isAuth, setIsAuth] = useState(false)
  const [loginAttempted, setLoginAttempted] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const navigate = useNavigate()

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    setEmailError(false)
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    if (!isValidEmail(email)) {
      setEmailError(true)
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const authenticated = validateLogin(email, password)
    setIsAuth(authenticated)
    setLoginAttempted(true)
    if (authenticated) {
      localStorage.setItem('isAuthenticated', 'true') // auth provisoria
      navigate('/Home')
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: '-1.25rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img className="img-logo" src={logo} alt="logo" />
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              marginTop: '-4rem',
              mx: { xs: 6, sm: 2, md: 1 },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                backgroundColor: '#dc2626',
                color: 'white',
                padding: '1rem',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: '0.4rem',
              }}
            >
              <Box
                sx={{
                  paddingLeft: '1rem',
                  borderRight: '1px solid white',
                  width: '4rem',
                  height: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                }}
              >
                <GoogleIcon />
              </Box>
              <Typography variant="h6" sx={{ paddingRight: '2rem' }}>
                Entrar com o Google
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <hr style={{ flexGrow: 1, margin: '0 10px', border: '0.5px solid #000', opacity: 0.5 }} />
              <Typography variant="h6">Ou, entre com seu email</Typography>
              <hr style={{ flexGrow: 1, margin: '0 10px', border: '0.5px solid #000', opacity: 0.5 }} />
            </Box>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              value={email}
              autoComplete="on"
              autoFocus
              helperText={emailError ? 'Formato Invalido' : ' '}
              onChange={handleEmailChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              value={password}
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handlePasswordChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: '1rem', mb: '1rem' }}
              disabled={!isLoginFormValid(email, password)}
            >
              Entrar
            </Button>
            {/* <Box sx={{ display: 'flex', justifyContent: 'center', mb: '1rem' }}>
              <MuiLink
                href="https://wa.me/message/RH3MIXPLWDZEN1"
                underline="hover"
              >
                {'Cadastre-se'}
              </MuiLink>
            </Box> */}
            {!isAuth && loginAttempted && (
              <Alert
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                severity="error"
              >
                Email ou senha incorretos
              </Alert>
            )}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
