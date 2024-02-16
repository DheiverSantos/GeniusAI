interface ClassificationResult {
  score: number
  label: string
}

type ApiResponse = ClassificationResult[]
const LINK_API =
  'https://api-inference.huggingface.co/models/DHEIVER/Brain_Tumor_Classification'

async function getABUS(imageBlob: Blob): Promise<ApiResponse> {
  if (!imageBlob) {
    throw new Error('No image blob provided')
  }

  try {
    const apiKey = import.meta.env.VITE_API_KEY

    if (!apiKey) {
      throw new Error('API key is not defined in .env')
    }

    const response = await fetch(LINK_API, {
      headers: {
        Authorization: apiKey,
      },
      method: 'POST',
      body: imageBlob,
    })

    if (!response.ok) {
      const errorMessage = `API call failed with status: ${response.status} ${
        response.statusText || '(no status text)'
      }`
      throw new Error(errorMessage)
    }

    const result: ApiResponse = await response.json()
    console.log(result)

    return result
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export default getABUS
