import { useNavigate } from 'react-router-dom'
import { validateLogin } from '../../auth/users'
import logo from '../../assets/logo.png'
import { useState, ChangeEvent, FormEvent } from 'react'
import {
  Alert,
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  ThemeProvider,
  createTheme,
  Link as MuiLink,
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
      navigate('/analise')
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
          <img className="img-logo" src={logo} alt="logo-speed-beer" />
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              marginTop: '-4rem',
              mx: { xs: 6, sm: 2, md: 1 },
            }}
          >
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
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: '1rem' }}>
              <MuiLink href="https://geniusai.art.br/" underline="hover">
                {'Cadastre-se'}
              </MuiLink>
            </Box>
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
