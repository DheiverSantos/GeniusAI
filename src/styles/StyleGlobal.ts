import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1d4ed8',
    },
    background: {
      default: '#f3f4f6',
      paper: '#ffffff',
    },
    text: {
      primary: '#1f2937',
      secondary: '#6b7280',
    },
    // Adicione outras personalizações aqui, conforme necessário
  },
  // Você pode estender o tema com customizações adicionais
})

export const mainStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  overflow: 'auto',
}

export const btnStyles = {
  width: {
    xs: '7rem',
    sm: '7.2rem',
    md: '7.5rem',
    lg: '8rem',
    xl: '8.5rem',
  },
  height: {
    xs: '2rem',
    sm: '2.3rem',
    md: '2.5rem',
    lg: '2.7rem',
    xl: '2.9rem',
  },
}

export const divAnaliseStyle = {
  display: 'flex',
  padding: '15px',
  width: '95%',
  height: 'auto',
  justifyContent: 'center',
  flexDirection: { xs: 'column', sm: 'column', md: 'row' },
  gap: { xs: '1rem', sm: '1rem', md: '1rem' },
}

export const boxLeftStyle = {
  display: 'flex',
  alignItems: 'flex-end',
  margin: '.5rem',
  justifyContent: 'flex-start',
  padding: '0.5rem',
  width: {
    xs: '18.75rem',
    sm: '25rem',
    md: '28.125rem',
    lg: '31.25rem',
    xl: '34.375rem',
  },
}

export const boxRigthStyle = {
  display: 'flex',
  alignItems: 'flex-end',
  margin: '0.5rem 0.5rem 0.5rem',
  justifyContent: 'flex-end',
  width: {
    xs: '18.75rem',
    sm: '25rem',
    md: '28.125rem',
    lg: '31.25rem',
    xl: '34.375rem',
  },
  padding: '0.5rem',
}

export const boxResultStyles = {
  width: {
    xs: '18.75rem',
    sm: '25rem',
    md: '28.125rem',
    lg: '31.25rem',
    xl: '34.375rem',
  },
  height: {
    xs: '18.75rem',
    sm: '25rem',
    md: '28.125rem',
    lg: '31.25rem',
    xl: '34.375rem',
  },
  marginTop: '1rem',
  borderRadius: '0.625rem',
  boxShadow: '0.3125rem 0.3125rem 1rem rgba(0, 0, 0, 0.3)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
}
