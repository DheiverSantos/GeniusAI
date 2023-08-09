import { client } from '@gradio/client'

async function getAnaliseApi(imgBlob, modelo) {
  /* const response_0 = await fetch(
    'https://raw.githubusercontent.com/gradio-app/gradio/main/test/test_files/bus.png',
  )
  const exampleImage = await response_0.blob() */

  try {
    const app = await client(
      'https://dheiver-segmento-de-angio-coronariana-v3.hf.space/',
    )
    const result = await app.predict('/predict', [imgBlob, modelo])
    console.log(result?.data[3])
  } catch (error) {
    console.error('An error occurred:', error)
    throw error
  }
}

export default getAnaliseApi
