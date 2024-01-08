interface ClassificationResult {
  score: number
  label: string
}

type ApiResponse = ClassificationResult[]

async function getABUS(imageBlob: Blob): Promise<ApiResponse> {
  if (!imageBlob) {
    throw new Error('No image blob provided')
  }

  try {
    const apiKey = import.meta.env.VITE_API_KEY

    if (!apiKey) {
      throw new Error('API key is not defined in .env')
    }

    const response = await fetch(
      'https://api-inference.huggingface.co/models/DHEIVER/Modelo-Avancado-de-Ultrassom-de-Mama',
      {
        headers: {
          Authorization: apiKey,
        },
        method: 'POST',
        body: imageBlob,
      },
    )

    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.statusText}`)
    }

    const result: ApiResponse = await response.json()
    console.log(result)

    return result
  } catch (error) {
    console.error('Error fetching ABUS data:', error)
    throw error
  }
}

export default getABUS
