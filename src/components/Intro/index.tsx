import {
  Box,
  ThemeProvider,
  createTheme,
  MobileStepper,
  Paper,
  Typography,
  Button,
} from '@mui/material'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { useState } from 'react'
import titleStyles from './style'

const steps = [
  {
    label: 'Como Funciona:',
    description: `O Aplicativo de Segmentação de Angiograma Coronariano é uma ferramenta projetada para auxiliar profissionais de saúde na análise de imagens médicas de angiogramas coronarianos. Utilizando modelos pré-treinados de inteligência artificial, o aplicativo oferece segmentação avançada e detecção de possíveis doenças nos vasos sanguíneos.
    
    Seu funcionamento é baseado em etapas intuitivas:`,
  },
  {
    label: 'Carregue a Imagem',
    description:
      'Faça o upload de um angiograma coronariano para a plataforma.',
  },
  {
    label: 'Escolha o Modelo',
    description: `Selecione um dos modelos pré-treinados, otimizados para diferentes tipos de imagens e necessidades médicas.`,
  },
  {
    label: 'Segmentação Avançada',
    description: ` O aplicativo processa a imagem usando técnicas de aprendizado profundo, identificando os vasos sanguíneos coronarianos.`,
  },
  {
    label: 'Detecção de Doenças',
    description: `Utilizando análise de clusterização, o aplicativo identifica possíveis padrões de doenças nos vasos sanguíneos.`,
  },
  {
    label: 'Indicador de Doença',
    description: `Com base nas características identificadas, o aplicativo oferece um indicador sobre a presença ou ausência de doenças.`,
  },
  {
    label: 'Resultados Fornecidos:',
    description: `- Segmentação Clara: Os vasos sanguíneos coronarianos são destacados, permitindo uma análise mais clara das estruturas.

    - Detecção de Doenças: O aplicativo indica se há possíveis padrões de doenças nos vasos, ajudando a identificar áreas de preocupação.
    
    - Explicação Informativa: Além do resultado, uma explicação detalhada é fornecida, baseada nas características identificadas.
    
    - Tomada de Decisão Rápida: A análise é realizada em um curto período de tempo, permitindo tomadas de decisão informadas de forma eficaz.
    
    - Suporte Médico: Profissionais de saúde podem utilizar os resultados para embasar diagnósticos e recomendações aos pacientes.
    
    O Aplicativo de Segmentação de Angiograma Coronariano é uma ferramenta poderosa que combina tecnologia de ponta com análise médica, proporcionando um meio eficiente de interpretar imagens de angiogramas coronarianos e identificar possíveis condições médicas.`,
  },
]

const theme = createTheme({
  palette: {
    mode: 'light',
  },
})

export default function Intro() {
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = steps.length

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h5" align="center" sx={titleStyles}>
        Segmentação de Angiograma Coronariano
      </Typography>
      <Box sx={{ width: '70vw', flexGrow: 1, margin: '2rem', mx: 'auto' }}>
        {' '}
        <MobileStepper
          variant="text"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Proximo
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Voltar
            </Button>
          }
        />
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            pl: 2,
            bgcolor: 'background.default',
          }}
        >
          <Typography sx={{ fontWeight: 'bold' }}>
            {steps[activeStep].label}
          </Typography>
        </Paper>
        <Box sx={{ height: 'auto', width: '100%', p: 2, overflowY: 'auto' }}>
          {steps[activeStep].description.split('\n').map((line, index) => (
            <Typography
              key={index}
              component="div"
              sx={{ textAlign: 'justify' }}
            >
              {line}
              <br />
            </Typography>
          ))}
        </Box>
      </Box>
    </ThemeProvider>
  )
}
