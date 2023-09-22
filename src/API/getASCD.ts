interface ClassificationResult {
  score: number
  label: string
}

type ApiResponse = ClassificationResult[]

async function getASCD(imageBlob: Blob): Promise<ApiResponse> {
  const response = await fetch(
    'https://api-inference.huggingface.co/models/DHEIVER/Diagnostico-de-Cancer-de-Pele-Aperfeicoado',
    {
      headers: {
        Authorization: 'Bearer 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',
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
}

export default getASCD
