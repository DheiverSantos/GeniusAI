import { useState, ChangeEvent, useEffect } from 'react'
import './InputImg.css'

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
    <div onDrop={handleDrop} onDragOver={preventDragHandler}>
      <label className="picture" htmlFor="picture__input" tabIndex={0}>
        {imageSrc ? (
          <img src={imageSrc} alt="preview" className="picture__image" />
        ) : (
          <span className="picture__image">
            Solte a Imagem Aqui - ou - Clique para o Upload
          </span>
        )}
      </label>
      <input
        type="file"
        id="picture__input"
        name="picture__input"
        onChange={handleInputChange}
        accept="image/*"
      />
    </div>
  )
}

export default InputImg
