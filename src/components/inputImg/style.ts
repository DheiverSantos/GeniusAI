const pictureStyles = {
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
  mt: '1rem',
  borderRadius: '0.625rem',
  boxShadow: '0.3125rem 0.3125rem 1rem rgba(0, 0, 0, 0.3)',
  background: '#e0f7fa',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#1d4ed8',
  cursor: 'pointer',
  fontFamily: 'sans-serif',
  transition: 'color 300ms ease-in-out, background 300ms ease-in-out',
  outline: 'none',
  overflow: 'hidden',
  '&:hover': {
    color: '#1d4ed8',
    background: '#D3EEFF',
  },
  '&:active': {
    borderColor: 'turquoise',
    color: 'turquoise',
    background: '#eee',
  },
  '&:focus': {
    color: '#777',
    background: '#ccc',
    boxShadow: '0 0 0.625rem rgba(0, 0, 0, 0.3)',
  },
}

const inputStyles = {
  display: 'none',
}

export { pictureStyles, inputStyles }
