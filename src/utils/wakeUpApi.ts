import imgFake from '../../src/assets/logo.png'
/* eslint-disable @typescript-eslint/no-explicit-any */

export const wakeUpApi = async (getAnalise: any, model?: string) => {
  let attempts = 0
  const maxAttempts = 5 // Número máximo de tentativas
  let result: any[] = []

  while (attempts < maxAttempts && result.length === 0) {
    try {
      const response = await fetch(imgFake)
      if (!response.ok) throw new Error('Falha ao carregar a imagem')
      const imageBlob = await response.blob()
      result = model
        ? await getAnalise(imageBlob, model)
        : await getAnalise(imageBlob)
      console.log('Tentativa:', attempts + 1)
      if (result.length > 0) {
        console.log('STATUS API: online', result)
        break
      }
    } catch (error) {
      console.error('Erro ao acordar a API:', error)
    }

    attempts += 1
  }

  if (result.length === 0) {
    console.log('Não foi possível acordar a API após 3 tentativas.')
  }
}
