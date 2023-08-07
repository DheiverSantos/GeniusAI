import { Box, ThemeProvider, Typography, createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    mode: 'light',
  },
})

function Discription() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          border: '0.0625rem solid green',
          padding: '1.125rem',
          width: '95%',
        }}
      >
        <Typography variant="h4" align="center" sx={{ mt: 3 }}>
          Segmentação de Angiograma Coronariano
        </Typography>
        <Typography variant="body1" align="left" sx={{ mt: 2 }}>
          Esta aplicação segmenta angiogramas coronarianos usando modelos de
          segmentação pré-treinados. Faça o upload de uma imagem de angiograma e
          selecione um modelo para visualizar o resultado da segmentação.
        </Typography>
        <Typography variant="body1" align="left" sx={{ mt: 2 }}>
          Selecione uma imagem de angiograma coronariano e um modelo de
          segmentação no painel à esquerda.
        </Typography>
        <Typography variant="body1" align="left" sx={{ mt: 2 }}>
          Status da Doença:
        </Typography>
        <Typography variant="body1" align="left" sx={{ mt: 1 }}>
          - True: Indica que a segmentação detectou uma área significativa de
          estenose.
        </Typography>
        <Typography variant="body1" align="left" sx={{ mt: 1 }}>
          - False: Indica que a segmentação não detectou estenose significativa.
        </Typography>
      </Box>
    </ThemeProvider>
  )
}

export default Discription
