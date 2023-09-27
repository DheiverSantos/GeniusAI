import { client } from '@gradio/client'

type OutputData = string | null

interface ApiResponse {
  type: string
  time: Date
  data: [string, number | GLfloat, OutputData]
  endpoint: string
  fn_index: number
}

async function getAlzheimerResult(imgBlob: Blob): Promise<OutputData> {
  try {
    const app = await client('https://dheiver-alzheimer.hf.space/')
    const result = (await app.predict('/predict', [imgBlob])) as ApiResponse
    console.log(result.data)

    return result.data[2]
  } catch (error) {
    console.error('Erro na Requisição:', error)
    throw error
  }
}

export default getAlzheimerResult
