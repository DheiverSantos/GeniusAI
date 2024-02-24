import imgFake from '../../src/assets/logo.png'
/* eslint-disable @typescript-eslint/no-explicit-any */

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const wakeUpApi = async (getAnalise: any, model?: string) => {
  let attempts = 0
  const maxAttempts = 5
  let result: any[] = []
  const delayBetweenAttempts = 1000

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

    if (attempts < maxAttempts && result.length === 0) {
      await sleep(delayBetweenAttempts)
    }
  }

  if (result.length === 0) {
    console.log('Não foi possível acordar a API após 5 tentativas.')
  }
}
