import {
  Box,
  Button,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material'
import icon from '../../assets/icon.png'

const theme = createTheme({
  palette: {
    mode: 'light',
  },
})

function Header() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'space-between',
          width: '100vw',
          padding: '1.5rem  3rem',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          boxSizing: 'border-box',
        }}
      >
        <img
          className="img-icon"
          src={icon}
          alt="logo-speed-beer"
          style={{ width: '2.5rem', height: '2.5rem' }}
        />

        <Typography variant="h5" align="center" sx={{ color: '#001BA1' }}>
          Segmentação de Angiograma Coronariano
        </Typography>
        <Button variant="contained">Contato</Button>
      </Box>
    </ThemeProvider>
  )
}

export default Header
