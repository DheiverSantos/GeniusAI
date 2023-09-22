import angiocorThumb from '../assets/angiocor_thumb.jpeg'
import abusThumb from '../assets/abus_thumb.jpeg'
import ascdThumb from '../assets/ascd_thumb.jpg'
import glaucoswinThumb from '../assets/glaucoswin_thumb.jpg'
import btswinThumb from '../assets/btswin_thumb.jpeg'

export const modelsInfo = [
  {
    fullname: 'Segmentação de Angiograma Coronariano',
    alias: 'AngioCor',
    thumb: angiocorThumb,
    description:
      'O Modelo de Segmentação de Angiograma Coronariano é uma ferramenta projetada para auxiliar profissionais de saúde na análise de imagens médicas de angiogramas coronarianos. Utilizando modelos pré-treinados de inteligência artificial, o aplicativo oferece segmentação avançada e detecção de possíveis doenças nos vasos sanguíneos.',
  },
  {
    fullname: 'Classificação de Glaucoma',
    alias: 'GlaucoSwin',
    thumb: glaucoswinThumb,
    description:
      'O GlaucoSwin é um modelo de IA especializado em identificar glaucoma em imagens de fundo de olho retinal. Alcança uma impressionante acurácia de 98,2% na classificação de imagens como glaucoma ou não glaucoma. Use-o para uma detecção rápida e precisa de glaucoma em imagens médicas.',
  },
  {
    fullname: 'Advanced Breast Ultrasound',
    alias: 'ABUS',
    thumb: abusThumb,
    description:
      'O modelo ABUS (Advanced Breast Ultrasound) é um modelo de aprendizado profundo projetado para a classificação de imagens de ultrassom de mama. Ele demonstra um desempenho sólido, com uma perda mínima de 0.0398 e uma impressionante precisão de 98.82%. É adequado para tarefas que envolvem a classificação precisa de imagens de ultrassom mamário, como a detecção de anomalias ou triagem inicial.',
  },
  {
    fullname: 'Advanced Skin Cancer Diagnosis',
    alias: 'ASCD',
    thumb: ascdThumb,
    description:
      'O modelo Diagnóstico Avançado de Câncer de Pele (DACP) é um modelo de aprendizado profundo projetado para a classificação de imagens de câncer de pele. Ele alcança uma precisão de 72,75% com uma perda de 0,7695. Mais detalhes são necessários para compreender totalmente os usos pretendidos e as limitações específicas deste modelo.',
  },
  {
    fullname: 'BrainTumor-TransformerSwin',
    alias: 'BTSwin',
    thumb: btswinThumb,
    description:
      'O BTSwin é uma versão refinada do modelo Microsoft/Swin-Base-Patch4-Window7-224-in22k, projetado especificamente para a classificação de tumores cerebrais em imagens médicas. Com perda mínima de 0,0118 e acurácia de 99,49%, auxilia profissionais de saúde no diagnóstico, mas não substitui avaliação médica.',
  },
]
