import imgFake from '../../src/assets/logo.png'

export const wakeUpApi = async (getAnalise) => {
  try {
    // Fetch da imagem para obter um Blob
    const response = await fetch(imgFake)
    if (!response.ok) throw new Error('Falha ao carregar a imagem')
    const imageBlob = await response.blob()

    const result = await getAnalise(imageBlob)
    console.log('STATUS API: online', result)
  } catch (error) {
    console.error('Erro ao acordar a API:', error)
  }
}
