import { client } from '@gradio/client'
interface LabelData {
  label: string
}

type AnaliseType = [LabelData, string, LabelData, LabelData, LabelData]

interface ApiResponse {
  type: string
  time: Date
  data: AnaliseType
  endpoint: string
  fn_index: number
}

async function getAngioCor(
  imgBlob: Blob,
  modelo: string,
): Promise<AnaliseType> {
  try {
    const app = await client(
      'https://dheiver-segmento-de-angio-coronariana-v5.hf.space/',
    )
    const result = (await app.predict('/predict', [
      imgBlob,
      modelo,
      true,
    ])) as ApiResponse
    console.log(result.data)
    return result.data
  } catch (error) {
    console.error('Erro na Requisição:', error)
    throw error
  }
}

export default getAngioCor
