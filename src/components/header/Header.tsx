import { Box, ThemeProvider, createTheme } from '@mui/material'
import icon from '../../assets/icon.png'
import MenuBar from '../menuBar/MenuBar'
import { useNavigate } from 'react-router-dom'

const theme = createTheme({
  palette: {
    mode: 'light',
  },
})

function Header() {
  const navigate = useNavigate()

  const handleIconClick = () => {
    navigate('/Home')
  }

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
          zIndex: '2',
        }}
      >
        <img
          className="img-icon"
          src={icon}
          alt="logo"
          style={{ width: '2.5rem', height: '2.5rem', cursor: 'pointer' }}
          onClick={handleIconClick}
        />
        <MenuBar />
      </Box>
    </ThemeProvider>
  )
}

export default Header
