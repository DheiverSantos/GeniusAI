import { useState, ChangeEvent, useEffect } from 'react'
import { Box } from '@mui/material'
import { pictureStyles, inputStyles } from './style'

interface InputImgProps {
  isResetImg: boolean
  setSelectedImage: (blob: Blob) => void
}

const InputImg: React.FC<InputImgProps> = ({
  isResetImg,
  setSelectedImage,
}) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null)

  useEffect(() => {
    if (isResetImg) {
      setImageSrc(null)
    }
  }, [isResetImg])

  const loadImage = (file: File) => {
    const reader = new FileReader()
    reader.onloadend = async () => {
      setImageSrc(reader.result as string)

      const response = await fetch(reader.result as string)
      const blob = await response.blob()
      setSelectedImage(blob)
    }
    reader.readAsDataURL(file)
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0]
    if (file) {
      loadImage(file)
    } else {
      setImageSrc(null)
    }
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const file = event.dataTransfer.files[0]
    if (file) {
      loadImage(file)
    }
  }

  const preventDragHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  return (
    <Box onDrop={handleDrop} onDragOver={preventDragHandler}>
      <Box
        component="label"
        htmlFor="picture__input"
        tabIndex={0}
        sx={pictureStyles}
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt="preview"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
            }}
          />
        ) : (
          <span>Insira Imagem</span>
        )}
      </Box>
      <input
        type="file"
        id="picture__input"
        name="picture__input"
        onChange={handleInputChange}
        accept="image/*"
        style={inputStyles}
      />
    </Box>
  )
}

export default InputImg
