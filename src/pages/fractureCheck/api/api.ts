import { client } from '@gradio/client'

type FractureAnalysisType = [string]

interface ApiResponse {
  type: string
  time: Date
  data: FractureAnalysisType
  endpoint: string
  fn_index: number
}

async function getFractureCheck(imgBlob: Blob): Promise<FractureAnalysisType> {
  try {
    const app = await client(
      'https://dheiver-deteccao-de-fraturas-em-raio-x.hf.space/',
    )
    const result = (await app.predict('/predict', [imgBlob])) as ApiResponse

    console.log(result.data)
    return result.data
  } catch (error) {
    console.error('Erro na Requisição:', error)
    throw error
  }
}

export default getFractureCheck
