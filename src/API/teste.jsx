import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { client } from '@gradio/client'

export default function ApiPage() {
  const [blob, setBlob] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)

  const fetchImage = async () => {
    const response = await axios.get(
      'https://raw.githubusercontent.com/gradio-app/gradio/main/test/test_files/bus.png',
      { responseType: 'blob' },
    )
    const exampleImage = response.data

    const app = await client(
      'https://dheiver-segmento-de-angio-coronariana-v2.hf.space/',
    )
    const result = await app.predict('/predict', [
      exampleImage,
      'SE-RegUNet 4GF',
    ])

    setBlob(result.data.image)
  }

  useEffect(() => {
    if (blob) {
      const objectUrl = URL.createObjectURL(blob)
      setImageUrl(objectUrl)

      // Libera a memória quando o componente é desmontado
      return () => URL.revokeObjectURL(objectUrl)
    }
  }, [blob])

  return (
    <div>
      <button onClick={fetchImage}>Carregar imagem</button>
      {imageUrl ? (
        <img src={imageUrl} alt="Resultado" />
      ) : (
        <div>Carregando...</div>
      )}
    </div>
  )
}
