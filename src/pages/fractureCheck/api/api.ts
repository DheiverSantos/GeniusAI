import { client } from '@gradio/client'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFractureCheck(imgBlob: Blob): Promise<any> {
  try {
    const app = await client('DHEIVER/Fraturas-em-Raio-X-com-EfficientNetB3')
    const result = await app.predict('/predict', [
      imgBlob, // blob in 'image' Image component
    ])

    console.log(result)
  } catch (error) {
    console.error('Erro na Requisição:', error)
    throw error
  }
}

export default getFractureCheck
